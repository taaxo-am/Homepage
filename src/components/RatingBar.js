import React from 'react';

const RatingBar = () => {

    return (
        <div className='d-flex'>
            {
                new Array(5).fill(0).map(item => {
                    console.log("RATING", item)
                    return <i className={`fas fa-star mr-2 text-rating`}/>
                })
            }
        </div>
    );
};

export default RatingBar;
