import React from 'react';
import { useSelector } from 'react-redux';
import { getUserById } from '../users/usersSlice';

const CommentReply = ({reply}) => {
    const author = useSelector(state => getUserById(state, reply.userId));

    const replyingTo = useSelector(state => getUserById(state, reply.replyingToUserId));

    return (
        <div>
            <img src={author.image} alt={author.name} />
            <div>
                <p>{author.name}</p>
                <p>@{author.username}</p>
            </div>
            <button>Reply</button>
            <p>
                <span>@{replyingTo.name}</span> {reply.content}
            </p>

        </div>
    )
}

export default CommentReply;