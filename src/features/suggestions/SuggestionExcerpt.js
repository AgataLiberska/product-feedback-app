import React from 'react';
import { Link } from 'react-router-dom';

import { countComments } from '../../utils/helperFunctions';

const SuggestionExcerpt = ({ suggestion }) => {

    return (
        <article>
            <h2><Link to={`/productRequests/${suggestion.id}`}>{suggestion.title}</Link></h2>
            <p>{suggestion.description}</p>
            <span>{suggestion.category}</span>
            <button>{suggestion.upvotes} upvotes</button>
            <div>
                {countComments(suggestion)} comments
            </div>
            
        </article>
    )
}

export default SuggestionExcerpt;