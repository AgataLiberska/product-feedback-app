import React from 'react';
import { Link } from 'react-router-dom';

import { countComments } from '../../utils/helperFunctions';
import CommentBubble from '../../assets/shared/icon-comments.svg';
import { SuggestionCard, CardHeading, CardText, CardCategory, UpvoteButton, CommentsBtn } from './SuggestionsListElements';

const SuggestionExcerpt = ({ suggestion }) => {

    return (
        <SuggestionCard>
            <CardHeading><Link to={`/productRequests/${suggestion.id}`}>{suggestion.title}</Link></CardHeading>
            <CardText>{suggestion.description}</CardText>

            <CardCategory>{suggestion.category}</CardCategory>
            <UpvoteButton>
                <i class="fas fa-chevron-up" />
                {suggestion.upvotes}
            </UpvoteButton>
            <CommentsBtn>
                <img src={CommentBubble} />
                {countComments(suggestion)}
            </CommentsBtn>
            
        </SuggestionCard>
    )
}

export default SuggestionExcerpt;