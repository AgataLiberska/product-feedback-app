import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import SuggestionExcerpt from './SuggestionExcerpt';
import Lightbulb from '../../assets/suggestions/icon-suggestions.svg';
import AddSuggestionBtn from './AddSuggestionBtn';
import NoSuggestions from './NoSuggestions';

import { SuggestionsListContainer, SuggestionsListHeader, SuggestionsHeading, SuggestionSortContainer, SortLabel, SortSelect, SuggestionHeadingSortWrapper } from './SuggestionsStyles';

const SuggestionsList = () => {
    const category = useSelector(state => state.categories.find(cat => cat.selected === true));

    const suggestions = useSelector(state => {
        if (category.name === 'all') {
            return state.suggestions;
        }
        else {
            return state.suggestions.filter(suggestion => suggestion.category === category.name);
        }
    });

    const [sortBy, setSortBy] = useState('most-upvotes');

    // this will change sorting of the list
    const onSortChange = e => {
        setSortBy(e.target.value);
    }


    // Now we need to sort but only filtered suggestions
    let sortedSuggestions;

    if (sortBy === 'most-upvotes') {
        sortedSuggestions = suggestions.slice().sort((a,b) => b.upvotes - a.upvotes);
    } 
    else if (sortBy === 'least-upvotes') {
        sortedSuggestions = suggestions.slice().sort((a,b) => a.upvotes - b.upvotes);
    }
    else if (sortBy === 'most-comments') {
        sortedSuggestions = suggestions.slice().sort((a,b) => b.comments - a.comments);
    }
    else if (sortBy === 'least-comments') {
        sortedSuggestions = suggestions.slice().sort((a,b) => a.comments - b.comments);
    }

    //great, now we want to display no suggestions screen if there's nothing
    let content;

    if (sortedSuggestions.length === 0) {
        content = <NoSuggestions />
    } else {
        content = sortedSuggestions.map(suggestion => {
            return (
                <SuggestionExcerpt suggestion={suggestion} key={suggestion.id} isLink={true}/>
            )
        })
    }

    return (
        <>
            <SuggestionsListHeader>
                <SuggestionHeadingSortWrapper>
                    <SuggestionsHeading>
                        <img src={Lightbulb} alt=""/>
                        {suggestions.length} Suggestions
                    </SuggestionsHeading>
                    <SuggestionSortContainer>
                        <SortLabel htmlFor="sort">
                            Sort by:
                        </SortLabel>
                        <SortSelect id="sort" defaultValue="most-upvotes" onChange={e => onSortChange(e)}>
                            <option value="most-upvotes">Most Upvotes</option>
                            <option value="least-upvotes">Least Upvotes</option>
                            <option value="most-comments">Most Comments</option>
                            <option value="least-comments">Least Comments</option>
                        </SortSelect>
                    </SuggestionSortContainer>
                </SuggestionHeadingSortWrapper>
                
                <AddSuggestionBtn to={'/productRequests/new'}>+ Add Feedback</AddSuggestionBtn>
            </SuggestionsListHeader>
            <SuggestionsListContainer>
                {content}
            </SuggestionsListContainer>
        </>
        
    )
}

export default SuggestionsList;