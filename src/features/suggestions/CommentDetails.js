import React from 'react';
import { useSelector } from 'react-redux';

import { getUserById } from '../users/usersSlice';
import CommentReply from './CommentReply';

import { CommentContainer, AuthorInfo, AuthorImage, AuthorDetails,AuthorName, AuthorUsername, ReplyButton, CommentText } from './CommentDetailsStyles';

const CommentDetails = ({comment}) => {
    const author = useSelector(state => getUserById(state, comment.userId));

    let renderedReplies = null; 

    if (comment.replies.length > 0) {
        renderedReplies = comment.replies.map(reply => {
            return (
                <CommentReply reply={reply}  key={reply.id} />
            )
        })
    }

    

    return (
        <CommentContainer>
            <AuthorInfo>
            <AuthorImage src={author.image} alt={author.name}/>
            <AuthorDetails>
                <AuthorName>{author.name}</AuthorName>
                <AuthorUsername>@{author.username}</AuthorUsername>
            </AuthorDetails>
            <ReplyButton>Reply</ReplyButton>
            </AuthorInfo>

            <CommentText>{comment.content}</CommentText>
            
            <ul>
                {renderedReplies}
            </ul>
        
        </CommentContainer>
    )
}

export default CommentDetails;