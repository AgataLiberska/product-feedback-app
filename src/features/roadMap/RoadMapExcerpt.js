import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RoadMapExcerptContainer, RoadMapExcerptTop, RoadMapExcerptHeading, LinkToRoadMap } from './RoadMapElements';

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
            <RoadMapExcerptTop>
                <RoadMapExcerptHeading>Roadmap</RoadMapExcerptHeading>
                <LinkToRoadMap to='/' >View</LinkToRoadMap>
            </RoadMapExcerptTop>
            <ul>
                <li>Planned <span>{countHowMany('planned')}</span></li>
                <li>In-Progress <span>{countHowMany('in-progress')}</span></li>
                <li>Live <span>{countHowMany('live')}</span></li>
            </ul>
        </RoadMapExcerptContainer>
    )
}

export default RoadMapExcerpt;