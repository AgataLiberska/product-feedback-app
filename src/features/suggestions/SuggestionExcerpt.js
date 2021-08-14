import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//action creators + seletor methods
import { suggestionUpvoted, removeSuggestionUpvoted } from './suggestionsSlice';
import { upvoteAdded, upvoteRemoved, getCurrentUser } from '../users/usersSlice';

// images and styled comoponents
import CommentBubble from '../../assets/shared/icon-comments.svg';
import { ResizeableSuggestionCard, StatusCard, CardHeading, CardText, CardCategory, UpvoteButton, ResizeableUpvoteButton, Comments, SuggestionStatus } from './SuggestionsStyles';

const ConditionalWrapper = ({
        condition, 
        wrapIfTrue, 
        wrapIfFalse, 
        children
    }) => condition ? wrapIfTrue(children) : wrapIfFalse(children);

const SuggestionExcerpt = ({ suggestion, showStatus, status, isLink }) => {
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
        <ConditionalWrapper
            condition={showStatus}
            wrapIfTrue={children => <StatusCard 
                                        status={status}>
                                            {children}
                                    </StatusCard>}
            wrapIfFalse={children => <ResizeableSuggestionCard>
                                        {children}
                                    </ResizeableSuggestionCard>}
        >
            { showStatus ? 
                <SuggestionStatus status={status}>
                    {suggestion.status === "planned" ? 
                        'Planned' : 
                        suggestion.status === "in-progress" ? 
                        'In Progress' : 
                        'Live'
                    }
                </SuggestionStatus>
            : null}
            
            <CardHeading>
                <ConditionalWrapper
                    condition={isLink}
                    wrapIfTrue={children => <Link 
                                                to={`/productRequests/${suggestion.id}`}
                                            >
                                                {children}
                                            </Link>}
                    wrapIfFalse={children => <>{children}</>}
                >
                    {suggestion.title}
                </ConditionalWrapper>
            </CardHeading>
            <CardText>{suggestion.description}</CardText>

            <CardCategory>{suggestion.category}</CardCategory>
            <ConditionalWrapper
                condition={showStatus}
                wrapIfTrue={children => <UpvoteButton 
                                            onClick={handleUpvoteClick} 
                                            aria-pressed={isUpvoted} 
                                            isPressed={isUpvoted}>
                                                {children}
                                        </UpvoteButton>}
                wrapIfFalse={children => <ResizeableUpvoteButton 
                                            onClick={handleUpvoteClick} 
                                            aria-pressed={isUpvoted} 
                                            isPressed={isUpvoted}> 
                                                {children} 
                                        </ResizeableUpvoteButton>}
            >
                <i className="fas fa-chevron-up" />
                {suggestion.upvotes}
            </ConditionalWrapper>
            <Comments>
                <img src={CommentBubble} alt=""/>
                {suggestion.comments}
            </Comments>
        </ConditionalWrapper>
    )
}

export default SuggestionExcerpt;