import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SuggestionExcerpt from './SuggestionExcerpt';

const SuggestionsList = () => {
    const suggestions = useSelector(state => state.suggestions);

    const [sortBy, setSortBy] = useState('most-upvotes');

    const onSortChange = e => {
        setSortBy(e.target.value);
    }

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

    console.log(sortedSuggestions)

    const renderedSuggestions = sortedSuggestions.map(suggestion => {
        return (
            <SuggestionExcerpt suggestion={suggestion} key={suggestion.id}/>
        )
    })

    return (
        <main>
            <header>
                <h1>{suggestions.length} Suggestions</h1>
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
            </header>
            <div>{renderedSuggestions}</div>
        </main>
        
    )
}

export default SuggestionsList;