import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SuggestionExcerpt from './SuggestionExcerpt';

const SuggestionsList = () => {
    const suggestions = useSelector(state => state.suggestions);
    const category = useSelector(state => state.categories.find(cat => cat.selected === true))

    const [sortBy, setSortBy] = useState('most-upvotes');

    // this will change sorting of the list
    const onSortChange = e => {
        setSortBy(e.target.value);
    }

    // if filter is applied, only display relevant category
    // and don't do anything on state, create copy
    const filteredSuggestions = (category && category.name !== 'all') ? suggestions.slice().filter(item => item.category === category.name.toLowerCase()) : suggestions.slice();

    // Now we need to sort but only filtered suggestions
    let sortedSuggestions;

    if (sortBy === 'most-upvotes') {
        sortedSuggestions = filteredSuggestions.slice().sort((a,b) => b.upvotes - a.upvotes);
    } 
    else if (sortBy === 'least-upvotes') {
        sortedSuggestions = filteredSuggestions.slice().sort((a,b) => a.upvotes - b.upvotes);
    }
    else if (sortBy === 'most-comments') {
        sortedSuggestions = filteredSuggestions.slice().sort((a,b) => b.comments - a.comments);
    }
    else if (sortBy === 'least-comments') {
        sortedSuggestions = filteredSuggestions.slice().sort((a,b) => a.comments - b.comments);
    }

    //great, now we want to display no suggestions screen if there's nothing
    let content;

    if (sortedSuggestions.length === 0) {
        content = <div>There is no feedback yet</div>
    } else {
        content = sortedSuggestions.map(suggestion => {
            return (
                <SuggestionExcerpt suggestion={suggestion} key={suggestion.id}/>
            )
        })
    }

    return (
        <main>
            <div>
                <h1>{filteredSuggestions.length} Suggestions</h1>
                <div>
                    <label htmlFor="sort">Sort by:</label>
                    <select id="sort" defaultValue="most-upvotes" onChange={e => onSortChange(e)}>
                        <option value="most-upvotes">Most Upvotes</option>
                        <option value="least-upvotes">Least Upvotes</option>
                        <option value="most-comments">Most Comments</option>
                        <option value="least-comments">Least Comments</option>
                    </select>
                </div>
                <Link to='/productRequests/new'/>
            </div>
            <div>{content}</div>
        </main>
        
    )
}

export default SuggestionsList;