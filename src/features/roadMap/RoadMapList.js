import React, { useState, useEffect } from 'react';

const RoadMapList = () => {
    
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        updatePredicate();
        window.addEventListener('resize', updatePredicate);

        return () => {
            window.removeEventListener('resize', updatePredicate);
        }
    })

    const updatePredicate = () => {
        setIsMobile(window.innerWidth < 768);
    }
    return (
        <div>
            
        </div>
    )
}

export default RoadMapList;