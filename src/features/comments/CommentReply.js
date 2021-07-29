import React from 'react';
import { useSelector } from 'react-redux';
import { getUserById } from '../users/usersSlice';

import { ReplyContainer, AuthorInfo, AuthorImage, AuthorDetails, AuthorName, AuthorUsername, CommentText, ReplyButton, ReplyingToUser } from './CommentDetailsStyles';

const CommentReply = ({reply}) => {
    const author = useSelector(state => getUserById(state, reply.userId));

    const replyingTo = useSelector(state => getUserById(state, reply.replyingToUserId));

    return (
        <ReplyContainer>
            <AuthorInfo>
                <AuthorImage src={author.image} alt={author.name} />
            <AuthorDetails>
                <AuthorName>{author.name}</AuthorName>
                <AuthorUsername>@{author.username}</AuthorUsername>
            </AuthorDetails>
            <ReplyButton>Reply</ReplyButton>
            </AuthorInfo>

            <CommentText>
                <ReplyingToUser>@{replyingTo.username}</ReplyingToUser> {reply.content}
            </CommentText>
        </ReplyContainer>
    )
}

export default CommentReply;