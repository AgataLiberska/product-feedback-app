import React from 'react';

const Details = ({match}) => {
    const {postId} = match.params;
    console.log(postId)
    return (
        <div> details </div>
    )
}

export default Details;