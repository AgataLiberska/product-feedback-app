import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { getCurrentUser, getUserById } from '../users/usersSlice';

import CommentReply from './CommentReply';
import AddReplyForm from './AddReplyForm';

// styled components
import { CommentContainer, AuthorInfo, AuthorImage, AuthorDetails,AuthorName, AuthorUsername, ReplyButton, CommentText , ReplyFormContainer} from './CommentDetailsStyles';
import { TextArea, SubmitButton } from './AddCommentFormStyles';



const CommentDetails = ({comment}) => {
    const commentAuthor = useSelector(state => getUserById(state, comment.userId));
    
    const replies = useSelector(state => state.comments.filter(comm => comm.replyingToCommentId === comment.id));

    const [replyFormVisible, setReplyFormVisible] = useState(false);
    

    const dispatch = useDispatch();

    const onReplyClick = () => {
        setReplyFormVisible(true);
    }

    



    let renderedReplies = null; 

    if (replies.length > 0) {
        renderedReplies = replies.map(reply => {
            return (
                <CommentReply reply={reply}  key={reply.id} />
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
                <ReplyButton onClick={onReplyClick}>Reply</ReplyButton>
            </AuthorInfo>

            <CommentText>{comment.content}</CommentText>

            { replyFormVisible ? 
                <AddReplyForm replyingTo={comment} />
            : null }
            
            <ul>
                {renderedReplies}
            </ul>
        </CommentContainer>
    )
}

export default CommentDetails;