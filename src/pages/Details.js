import React from 'react';
import { useSelector } from 'react-redux';

import { findSuggestionById } from '../features/suggestions/suggestionsSlice';

import SuggestionExcerpt from '../features/suggestions/SuggestionExcerpt';
import CommentsList from '../features/suggestions/CommentsList';
import AddCommentForm from '../features/suggestions/AddCommentForm';

import BackArrow from '../assets/shared/icon-arrow-left.svg';

import { DetailsPageWrapper, DetailsMenu, GoBackLink, EditFeedbackBtn } from './DetailsPageStyles';
import { getCurrentUser } from '../features/users/usersSlice';


const Details = ({match}) => {
    const suggestionId = match.params.requestId;

    const currentSuggestion = useSelector((state) => 
        findSuggestionById(state, suggestionId)
    )
    const currentUser = useSelector(state => getCurrentUser(state));

    const isAuthor = currentUser.id === currentSuggestion.userId;
    
    
    return (
        <DetailsPageWrapper>
            <DetailsMenu>
                <GoBackLink to='/'>
                    <img src={BackArrow} alt='' />
                    Go Back
                </GoBackLink>
                { isAuthor ? 
                <EditFeedbackBtn to={`/productRequests/${suggestionId}/edit`}>
                    Edit Feedback
                </EditFeedbackBtn>
                : null }
            </DetailsMenu>
            <SuggestionExcerpt suggestion={currentSuggestion} />
            <CommentsList suggestion={currentSuggestion} />
            <AddCommentForm suggestion={currentSuggestion}/>
        </DetailsPageWrapper>


    )
}

export default Details;