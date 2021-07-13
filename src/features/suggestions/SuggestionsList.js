import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SuggestionExcerpt from './SuggestionExcerpt';


const SuggestionsList = () => {
    const suggestions = useSelector(state => state.suggestions);

    console.log(suggestions)

    const renderedSuggestions = suggestions.map(suggestion => {
        return (
            <SuggestionExcerpt suggestion={suggestion} key={suggestion.id}/>
        )
    })

    return (
        <div>{renderedSuggestions}</div>
    )
}

export default SuggestionsList;