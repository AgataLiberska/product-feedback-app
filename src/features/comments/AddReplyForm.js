import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { getCurrentUser, getUserById } from '../users/usersSlice';
import { commentAdded } from './commentsSlice';
import { commentCounted } from '../suggestions/suggestionsSlice';

// styled components
import { ReplyFormContainer } from './AddReplyFormStyles';
import { TextArea, SubmitButton } from '../../reusable/reusableStyles';

const AddReplyForm = ({ replyingTo, nestUnder}) => {
    const currentUser = useSelector(state => getCurrentUser(state));
    const originalCommentAuthor = useSelector(state => getUserById(state, replyingTo.userId))
    const dispatch = useDispatch();

    const [replyText, setReplyText] = useState(``);

    const onReplyTextChange = e => setReplyText(e.target.value);

    const onPostReplyClick = e => {
        e.preventDefault();

        if (!replyText) {
            return;
        }

        const reply = {
            id: nanoid(),
            content: replyText,
            userId: currentUser.id,
            suggestionId: replyingTo.suggestionId,
            replyingToUserId: originalCommentAuthor.id,
            replyingToCommentId: nestUnder.id
        } 

        dispatch(commentAdded(reply));
        dispatch(commentCounted(replyingTo.suggestionId));

        setReplyText("");
    }

    return (
        <ReplyFormContainer>
            <TextArea 
                aria-label="Type your reply here"
                placeholder="Type your reply here"
                maxLength="250"
                value={replyText}
                onChange={onReplyTextChange}
            />
            <SubmitButton onClick={onPostReplyClick}>Post Reply</SubmitButton>          
        </ReplyFormContainer>
    )
}

export default AddReplyForm;