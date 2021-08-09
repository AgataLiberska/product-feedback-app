import React from 'react';
import SuggestionExcerpt from '../suggestions/SuggestionExcerpt';

import { RoadMapStatusGroup, GroupHeading, GroupTagline, GroupContainer } from './RoadMapStyles';

const RoadMapColumn = ({suggestions, heading, tagline, isSelected}) => {
    const renderedSuggestions = suggestions.map(suggestion => {
        return (
            <li>
                <SuggestionExcerpt 
                    suggestion={suggestion} 
                    key={suggestion.id}
                    showStatus={true}
                />
            </li>

        )
    })

    return (
        <RoadMapStatusGroup selected={isSelected}>
            <GroupHeading>{heading}</GroupHeading>
            <GroupTagline>{tagline}</GroupTagline>
            <GroupContainer>
                {renderedSuggestions}
            </GroupContainer>
        </RoadMapStatusGroup>
    )
}

export default RoadMapColumn;