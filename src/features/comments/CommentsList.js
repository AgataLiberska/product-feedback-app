import React from 'react';
import { useSelector } from 'react-redux';

import CommentDetails from './CommentDetails';

import { CommentsListContainer, CommentsCount } from './CommentsStyles';

const CommentsList = ({suggestion}) => {

    const comments = useSelector(state => state.comments.filter(comm => comm.suggestionId === suggestion.id &&!comm.replyingToCommentId))
    
    const renderedComments = comments.map(comment => {
        return (
            <CommentDetails key={comment.id} comment={comment}/>)
    })


    return (
        <CommentsListContainer>
            <CommentsCount>
                {suggestion.comments} Comments
            </CommentsCount>
            <ul>
                {renderedComments}
            </ul>
        </CommentsListContainer>
    )
}

export default CommentsList;
