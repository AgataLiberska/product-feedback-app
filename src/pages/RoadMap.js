import React from 'react';

// components
import { AddFeedbackBtn } from '../features/suggestions/SuggestionsStyles';
import GoBack from '../reusable/GoBackLink';
import RoadMapList from '../features/roadMap/RoadMapList';

//styled components
import { RoadMapPageWrapper, RoadMapHeaderContainer, RoadMapHeading } from './RoadMapStyles';


const RoadMap = () => {
    return (
        <RoadMapPageWrapper>
            <RoadMapHeaderContainer>
                <div>
                    <GoBack darkText={false}/>
                    <RoadMapHeading>Roadmap</RoadMapHeading>
                </div>
                <AddFeedbackBtn to='/productRequests/new'>+ Add Feedback</AddFeedbackBtn>
            </RoadMapHeaderContainer>
            <main>
                <RoadMapList />    
            </main>   
        </RoadMapPageWrapper>
    )
}

export default RoadMap;