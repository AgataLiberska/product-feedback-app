import React from 'react';
import { useSelector } from 'react-redux';

import { findSuggestionById } from '../features/suggestions/suggestionsSlice';

import SuggestionExcerpt from '../features/suggestions/SuggestionExcerpt';
import CommentsList from '../features/comments/CommentsList';
import AddCommentForm from '../features/comments/AddCommentForm';
import GoBack from '../reusable/GoBackLink';


import { DetailsPageWrapper, DetailsMenu, EditFeedbackBtn } from './DetailsPageStyles';
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
                <GoBack darkText={true}/>
                { isAuthor ? 
                <EditFeedbackBtn to={`/productRequests/${suggestionId}/edit`}>
                    Edit Feedback
                </EditFeedbackBtn>
                : null }
            </DetailsMenu>
            <SuggestionExcerpt suggestion={currentSuggestion} isLink={false}/>
            <CommentsList suggestion={currentSuggestion} />
            <AddCommentForm suggestion={currentSuggestion}/>
        </DetailsPageWrapper>


    )
}

export default Details;