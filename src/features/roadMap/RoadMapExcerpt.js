import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
        <section>
            <h2>Roadmap</h2>
            <Link to='/' >View</Link>
            <ul>
                <li>Planned <span>{countHowMany('planned')}</span></li>
                <li>In-Progress <span>{countHowMany('in-progress')}</span></li>
                <li>Live <span>{countHowMany('live')}</span></li>
            </ul>
        </section>
    )
}

export default RoadMapExcerpt;