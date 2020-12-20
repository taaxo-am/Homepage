import React from 'react';

const RatingProgressBar = ({starsNum, percentage}) => {
    return (
        <div className='d-flex mt-3 align-items-center'>
            <span className='me-4'>{starsNum} Star</span>
            <div className="flex-grow-1 progress" style={{height: '20px'}}>
                <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="30"
                     aria-valuemin="0" aria-valuemax="100" style={{width: percentage + '%'}}/>
            </div>
            <span className='ms-4'>{percentage} %</span>
        </div>
    );
};

export default RatingProgressBar;
