import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { findSuggestionById } from '../features/suggestions/suggestionsSlice';

import SuggestionExcerpt from '../features/suggestions/SuggestionExcerpt';
import CommentsList from '../features/suggestions/CommentsList';

import { DetailsPageWrapper, DetailsMenu } from './DetailsPageStyles';


const Details = ({match}) => {
    const suggestionId = match.params.requestId;

    const currentSuggestion = useSelector((state) => 
        findSuggestionById(state, suggestionId)
    )
    
    
    return (
        <DetailsPageWrapper>
            <DetailsMenu>
                <Link to='/'>
                    <i className="fas fa-chevron-left" />
                    Go Back
                </Link>
                <button>
                    Edit Feedback
                </button>
            </DetailsMenu>
            <SuggestionExcerpt suggestion={currentSuggestion} />
            <CommentsList suggestion={currentSuggestion} />
        </DetailsPageWrapper>


    )
}

export default Details;