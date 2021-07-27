import React from 'react';
import { useSelector } from 'react-redux';

import { getUserById } from '../users/usersSlice';
import CommentReply from './CommentReply';

const CommentDetails = ({comment}) => {
    const author = useSelector(state => getUserById(state, comment.userId));

    let renderedReplies = null; 
    console.log(comment.replies.length);
    
    if (comment.replies.length > 0) {
        renderedReplies = comment.replies.map(reply => {
            console.log(reply);
            return (
                <CommentReply reply={reply}  key={reply.id} />
            )
        })
    }

    

    return (
        <div>
            <img src={author.image} alt={author.name}/>
            <div>
                <p>{author.name}</p>
                <p>@{author.username}</p>
            </div>
            <button>Reply</button>
            <p>{comment.content}</p>
            {renderedReplies}
        </div>
    )
}

export default CommentDetails;