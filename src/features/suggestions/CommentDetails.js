import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { getUserById } from '../users/usersSlice';
import CommentReply from './CommentReply';

import { CommentContainer, AuthorInfo, AuthorImage, AuthorDetails,AuthorName, AuthorUsername, ReplyButton, CommentText , ReplyFormContainer} from './CommentDetailsStyles';

import { TextArea, SubmitButton } from './AddCommentFormStyles';

const CommentDetails = ({comment}) => {
    const [replyFormVisible, setReplyFormVisible] = useState(false);
    const [replyText, setReplyText] = useState("");
    const author = useSelector(state => getUserById(state, comment.userId));

    let renderedReplies = null; 

    if (comment.replies.length > 0) {
        renderedReplies = comment.replies.map(reply => {
            return (
                <CommentReply reply={reply}  key={reply.id} />
            )
        })
    }

    const onReplyClick = () => {
        setReplyFormVisible(true);
    }

    const onReplyTextChange = e => setReplyText(e.target.value);
    

    return (
        <CommentContainer>
            <AuthorInfo>
                <AuthorImage src={author.image} alt={author.name}/>
                <AuthorDetails>
                    <AuthorName>{author.name}</AuthorName>
                    <AuthorUsername>@{author.username}</AuthorUsername>
                </AuthorDetails>
                <ReplyButton onClick={onReplyClick}>Reply</ReplyButton>
            </AuthorInfo>

            <CommentText>{comment.content}</CommentText>

            { replyFormVisible ? 
                <ReplyFormContainer>
                        <TextArea 
                            aria-label="Type your reply here"
                            placeholder="Type your reply here"
                            maxLength="250"
                            value={replyText}
                            onChange={onReplyTextChange}
                        />
                        <SubmitButton>Post Reply</SubmitButton>          
                </ReplyFormContainer>
            : null }
            
            <ul>
                {renderedReplies}
            </ul>


        
        </CommentContainer>
    )
}

export default CommentDetails;