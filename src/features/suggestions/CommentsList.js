import React from 'react';
import { countComments } from '../../utils/helperFunctions';

import CommentDetails from './CommentDetails';

const CommentsList = ({suggestion}) => {

    const renderedComments = suggestion.comments.map(comment => {
        return (
            <CommentDetails key={`${suggestion.id}.${comment.id}`} comment={comment}/>)
    })    

    return (
        <div>
            <p>
                {countComments(suggestion)} Comments
            </p>
            {renderedComments}
        </div>
    )
}

export default CommentsList;
