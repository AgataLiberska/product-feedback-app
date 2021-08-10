import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { getCurrentUser } from '../users/usersSlice';
import { commentAdded } from '../comments/commentsSlice';
import { commentCounted } from '../suggestions/suggestionsSlice';

import { FormWrapper, FormHeading, FormContainer, BottomFormWrapper, CharactersLeft } from './CommentsStyles';
import { TextArea, SubmitButton } from '../../reusable/reusableStyles';

const AddCommentForm = ({suggestion}) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => getCurrentUser(state));
    const currentSuggestionId = suggestion.id;
    const [comment, setComment] = useState('');

    const onCommentChange = (e) => {
        setComment(e.target.value);
    }

    const onSaveCommentClicked = e => {
        e.preventDefault();

        if (!comment) {
            return;
        }

        const newComment = {
            id: nanoid(),
            content: comment,
            userId: currentUser.id,
            suggestionId: currentSuggestionId
        }

        dispatch(commentAdded(newComment));
        dispatch(commentCounted(currentSuggestionId))

        setComment("");
    }

    return (
        <FormWrapper>
            <FormHeading>Add Comment</FormHeading>
            <FormContainer>
                <TextArea 
                    aria-label="Type your comment here"
                    placeholder="Type your comment here"
                    maxLength='250'
                    value={comment}
                    onChange={onCommentChange}
                />
                <BottomFormWrapper>
                    <CharactersLeft>{250 - comment.length} Characters left</CharactersLeft>
                    <SubmitButton onClick={onSaveCommentClicked}>Post Comment</SubmitButton>
                </BottomFormWrapper>

            </FormContainer>
        </FormWrapper>
    )
}

export default AddCommentForm;