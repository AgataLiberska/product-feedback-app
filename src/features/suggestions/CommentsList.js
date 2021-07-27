import React from 'react';
import { countComments } from '../../utils/helperFunctions';

import CommentDetails from './CommentDetails';

import { CommentsListContainer, CommentsCount } from './CommentsListStyles';

const CommentsList = ({suggestion}) => {

    const renderedComments = suggestion.comments.map(comment => {
        return (
            <CommentDetails key={`${suggestion.id}.${comment.id}`} comment={comment}/>)
    })    

    return (
        <CommentsListContainer>
            <CommentsCount>
                {countComments(suggestion)} Comments
            </CommentsCount>
            {renderedComments}
        </CommentsListContainer>
    )
}

export default CommentsList;
