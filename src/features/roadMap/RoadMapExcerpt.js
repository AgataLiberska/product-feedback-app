import React from 'react';
import { useSelector } from 'react-redux';
import { RoadMapExcerptContainer, ExcerptTop, ExcerptHeading, ExcerptCategory, ExcerptCategoryNumber, LinkToRoadMap } from './RoadMapStyles';

const RoadMapExcerpt = () => {
    const suggestions = useSelector(state => state.suggestions);

    const countHowMany = status => {
        return (
            suggestions
                .slice()
                .filter(suggestion => suggestion.status === status)
                .length
        )
    }


    return (
        <RoadMapExcerptContainer>
            <ExcerptTop>
                <ExcerptHeading>Roadmap</ExcerptHeading>
                <LinkToRoadMap to='/roadMap' >View</LinkToRoadMap>
            </ExcerptTop>
            <ul>
                <ExcerptCategory>Planned <ExcerptCategoryNumber>{countHowMany('planned')}</ExcerptCategoryNumber></ExcerptCategory>
                <ExcerptCategory>In-Progress <ExcerptCategoryNumber>{countHowMany('in-progress')}</ExcerptCategoryNumber></ExcerptCategory>
                <ExcerptCategory>Live <ExcerptCategoryNumber>{countHowMany('live')}</ExcerptCategoryNumber></ExcerptCategory>
            </ul>
        </RoadMapExcerptContainer>
    )
}

export default RoadMapExcerpt;