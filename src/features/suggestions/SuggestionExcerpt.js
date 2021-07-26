import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { suggestionUpvoted, removeSuggestionUpvoted } from './suggestionsSlice';
import { upvoteAdded, upvoteRemoved, getCurrentUser } from '../users/usersSlice';

import { countComments } from '../../utils/helperFunctions';
import CommentBubble from '../../assets/shared/icon-comments.svg';
import { SuggestionCard, CardHeading, CardText, CardCategory, UpvoteButton, CommentsBtn } from './SuggestionExcerptStyles';

const SuggestionExcerpt = ({ suggestion }) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => getCurrentUser(state));

    const [isUpvoted, setIsUpvoted] = useState(false);

    useEffect(() => {
        if (currentUser.upvotedSuggestions.includes(suggestion.id)) {
            setIsUpvoted(true);
        }

        else {
            setIsUpvoted(false);
        }   
    }, [currentUser, suggestion])

    const handleUpvoteClick = () => {
        setIsUpvoted(!isUpvoted);

        if (!isUpvoted) {
            dispatch(suggestionUpvoted(suggestion.id))
            dispatch(upvoteAdded({userId: currentUser.id, suggestionId: suggestion.id}))
        } else {
            dispatch(removeSuggestionUpvoted(suggestion.id));
            dispatch(upvoteRemoved({userId: currentUser.id, suggestionId: suggestion.id}))
        }

    }

    

    return (
        <SuggestionCard>
            <CardHeading><Link to={`/productRequests/${suggestion.id}`}>{suggestion.title}</Link></CardHeading>
            <CardText>{suggestion.description}</CardText>

            <CardCategory>{suggestion.category}</CardCategory>
            <UpvoteButton onClick={handleUpvoteClick} aria-pressed={isUpvoted} isPressed={isUpvoted}>
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