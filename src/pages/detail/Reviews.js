import React from 'react';
import iphone from "../../img/iphone.jpg";
import Review from "./Review";
import RatingProgressBar from "./RatingProgressBar";

const Reviews = () => {
    return (
        <div className='container-fluid py-5'>
            <div className="row m-0 justify-content-around">
                <div className="col-12 col-md-4 d-flex flex-column">
                    <div className='d-flex flex-column'>
                        <h3>CUSTOMER REVIEWS</h3>
                        <div className="d-flex align-items-center mt-3">
                            <span className='underlined'>4.5 out of 5</span>
                        </div>
                        <span className='font-weight-bold text-info underlined mt-3'>1200 Ratings</span>

                        <RatingProgressBar starsNum={5} percentage={86}/>
                        <RatingProgressBar starsNum={4} percentage={9}/>
                        <RatingProgressBar starsNum={3} percentage={2}/>
                        <RatingProgressBar starsNum={2} percentage={1}/>
                        <RatingProgressBar starsNum={1} percentage={1}/>
                    </div>


                    <div>
                        <h3 className='mt-5'>Review This Product</h3>
                        <button className='btn btn-danger w-50 mt-3 pr-md-5 pl-md-5'>Review Now</button>
                    </div>
                </div>
                <div className="col-12 col-md-5 d-flex flex-column mt-md-0 mt-4">
                    <h3>Top Reviews from Our Customers</h3>

                    <Review/>
                    <Review/>
                    <Review/>
                    <Review/>
                    <Review/>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
