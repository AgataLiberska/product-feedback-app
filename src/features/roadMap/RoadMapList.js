import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { findSuggestionsByStatus } from '../suggestions/suggestionsSlice';

import RoadMapColumn from './RoadMapColumn';

// styled components
import { RoadMapTabsContainer, RoadMapTab, RoadMapItemsWrapper } from './RoadMapStyles';

const RoadMapList = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentSelection, setCurrentSelection] = useState('in-progress');

    const tabs = [
        {
            status: 'planned',
            text: 'Planned', 
            color: '#F49F85'
        },
        {
            status: 'in-progress',
            text: 'In Progress',
            color: '#AD1FEA'            
        },
        {
            status: 'live',
            text: 'Live',
            color: '#62BCFA'
        }
    ];

    const plannedSuggestions = useSelector(state => findSuggestionsByStatus(state, 'planned'));
    const inProgressSuggestions = useSelector(state => findSuggestionsByStatus(state, 'in-progress'));
    const liveSuggestions = useSelector(state => findSuggestionsByStatus(state, 'live'));

    const updatePredicate = () => {
        setIsMobile(window.innerWidth < 768);
    }

    useEffect(() => {
        updatePredicate();
        window.addEventListener('resize', updatePredicate);

        return () => {
            window.removeEventListener('resize', updatePredicate);
        }
    })


    const renderedTabs = tabs.map(tab => {
        return (
            <RoadMapTab 
                key={tab.status}
                onClick={ e => setCurrentSelection(tab.status)}
                color={tab.color}
                isSelected={currentSelection === tab.status ? 1 : 0}
            >
                {tab.text}
            </RoadMapTab>
        )
    })


    return (
        <>
            { isMobile ?
                <RoadMapTabsContainer>
                    { renderedTabs }
                </RoadMapTabsContainer>

                : null
            }
            <RoadMapItemsWrapper>
                <RoadMapColumn 
                    isSelected={ currentSelection === 'planned' ? 1 : 0 }
                    suggestions={ plannedSuggestions }
                    heading={`Planned (${plannedSuggestions.length})`}
                    tagline='Ideas prioritised for research'
                />
                <RoadMapColumn
                    isSelected={ currentSelection === 'in-progress' ? 1 : 0 }
                    suggestions={inProgressSuggestions}
                    heading={`In Progress (${inProgressSuggestions.length})`}
                    tagline='Currently being developed'
                />
                <RoadMapColumn 
                    isSelected={ currentSelection === 'live' ? 1 : 0 }
                    suggestions={ liveSuggestions }
                    heading={`Live (${liveSuggestions.length})`}
                    tagline='Released features'
                />
            </RoadMapItemsWrapper>
        </>
    )
}

export default RoadMapList;