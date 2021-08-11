import React from 'react';
import AddSuggestionBtn from './AddSuggestionBtn';

import { NoSuggestionsContainer, NoSuggestionsImage, NoSuggestionsHeading, NoSuggestionsText } from './SuggestionsStyles';

const NoSuggestions = () => {
    return (
        <NoSuggestionsContainer>
            <NoSuggestionsImage />
            <NoSuggestionsHeading>
                There is no feedback yet.
            </NoSuggestionsHeading>
            <NoSuggestionsText> 
                Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
            </NoSuggestionsText>
            <AddSuggestionBtn />
        </NoSuggestionsContainer>
    )
}

export default NoSuggestions;