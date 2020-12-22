import React from 'react';
import avatar from '../../img/avatar.png'

const Review = () => {
    return (
        <div className='d-flex align-items-start mt-5'>
            <img src={avatar} alt=""/>
            <div className="d-flex flex-column ms-4 ms-md-4">
                <h5 className='fw-bold'>Yasir Carafaad</h5>
                <div className="d-flex flex-column flex-xl-row">
                    <small className='text-black-50 mt-1 mt-xl-0'>September 02 2020</small>
                </div>
                <small className='mt-3'>There isn't much to dislike about Canon's SL3 SLR camera. I buy camera bodies often, keep them a year and
                    then often upgrade (I travel for a living).

                    I have yet to find a really good POINT & SHOOT camera to carry for my travels. They always let me down
                    (Canon included) in performance.
                </small>
            </div>
        </div>
    );
};

export default Review;
