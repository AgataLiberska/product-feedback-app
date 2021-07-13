import React from 'react';
import { Link } from 'react-router-dom';



const SuggestionExcerpt = ({ suggestion }) => {

    const countComments = () => {
        let count = 0;
        count += suggestion.comments.length;

        for (let i=0; i<suggestion.comments.length; i++) {
            count += suggestion.comments[i].replies.length;
        }

        return count;
    }

    console.log(suggestion.comments)
    return (
        <article>
            <h2><Link to={`/productRequests/${suggestion.id}`}>{suggestion.title}</Link></h2>
            <p>{suggestion.description}</p>
            <span>{suggestion.category}</span>
            <button>{suggestion.upvotes} upvotes</button>
            <div>
                {countComments()} comments
            </div>
            
        </article>
    )
}

export default SuggestionExcerpt;