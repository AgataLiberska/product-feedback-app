import React from 'react';
import SuggestionExcerpt from '../suggestions/SuggestionExcerpt';

import { RoadMapStatusGroup, GroupHeading, GroupTagline, GroupContainer } from './RoadMapStyles';

const RoadMapColumn = ({suggestions, heading, tagline, isSelected}) => {
    const renderedSuggestions = suggestions.map(suggestion => {
        return (
            <li key={suggestion.id}>
                <SuggestionExcerpt 
                    suggestion={suggestion} 
                    showStatus={true}
                    status={suggestion.status}
                    isLink={true}
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