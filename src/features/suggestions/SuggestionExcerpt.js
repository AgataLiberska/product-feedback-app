import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { suggestionUpvoted } from './suggestionsSlice';
import { upvoteAdded, getCurrentUser } from '../users/usersSlice';

import { countComments } from '../../utils/helperFunctions';
import CommentBubble from '../../assets/shared/icon-comments.svg';
import { SuggestionCard, CardHeading, CardText, CardCategory, UpvoteButton, CommentsBtn } from './SuggestionExcerptStyles';

const SuggestionExcerpt = ({ suggestion }) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => getCurrentUser(state));

    const handleUpvoteClick = () => {
        dispatch(suggestionUpvoted(suggestion.id))
        dispatch(upvoteAdded({userId: currentUser.id, suggestionId: suggestion.id}))
    }

    return (
        <SuggestionCard>
            <CardHeading><Link to={`/productRequests/${suggestion.id}`}>{suggestion.title}</Link></CardHeading>
            <CardText>{suggestion.description}</CardText>

            <CardCategory>{suggestion.category}</CardCategory>
            <UpvoteButton onClick={handleUpvoteClick}>
                <i className="fas fa-chevron-up" />
                {suggestion.upvotes}
            </UpvoteButton>
            <CommentsBtn to={`/productRequests/${suggestion.id}`}>
                <img src={CommentBubble} alt=""/>
                {countComments(suggestion)}
            </CommentsBtn>
            
        </SuggestionCard>
    )
}

export default SuggestionExcerpt;