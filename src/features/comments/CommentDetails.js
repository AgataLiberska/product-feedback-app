import React, { useState } from 'react';
import { useSelector} from 'react-redux';


import { getUserById } from '../users/usersSlice';

import CommentReply from './CommentReply';
import AddReplyForm from './AddReplyForm';

// styled components
import { CommentContainer, AuthorInfo, AuthorImage, AuthorDetails,AuthorName, AuthorUsername, ReplyButton, CommentText } from './CommentsStyles';


const CommentDetails = ({comment}) => {
    const [replyFormVisible, setReplyFormVisible] = useState(false);
    const [replyingToComment, setReplyingToComment ] = useState(null);

    const commentAuthor = useSelector(state => getUserById(state, comment.userId));
    const replies = useSelector(state => state.comments.filter(comm => comm.replyingToCommentId === comment.id));


    const onReplyClick = (comment) => {
        setReplyFormVisible(true);
        setReplyingToComment(comment);
    }

    let renderedReplies = null; 

    if (replies.length > 0) {
        renderedReplies = replies.map(reply => {
            return (
                <CommentReply reply={reply}  key={reply.id} onReply={onReplyClick}/>
            )
        })
    }
    

    return (
        <CommentContainer>
            <AuthorInfo>
                <AuthorImage src={commentAuthor.image} alt={commentAuthor.name}/>
                <AuthorDetails>
                    <AuthorName>{commentAuthor.name}</AuthorName>
                    <AuthorUsername>@{commentAuthor.username}</AuthorUsername>
                </AuthorDetails>
                <ReplyButton onClick={() => onReplyClick(comment)}>Reply</ReplyButton>
            </AuthorInfo>

            <CommentText>{comment.content}</CommentText>

            <ul>
                {renderedReplies}
            </ul>

            { replyFormVisible ? 
                <AddReplyForm 
                    replyingTo={replyingToComment} 
                    nestUnder={comment}
                    resetReplyForm={() => setReplyFormVisible(false)}
                    hasReplies={renderedReplies ? true : false}
                />
            : null }

        </CommentContainer>
    )
}

export default CommentDetails;