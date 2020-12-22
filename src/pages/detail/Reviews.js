import React from 'react';
import Review from "./Review";
import RatingProgressBar from "./RatingProgressBar";

import 'bootstrap/dist/js/bootstrap.bundle'

const Reviews = () => {
    return (
        <>
            <div className='container-fluid py-5'>
                <div className="row m-0 justify-content-around">
                    <div className="col-12 col-md-4 d-flex flex-column px-0 px-md-3">
                        <div className='d-flex flex-column'>
                            <div className="d-flex card-header border justify-content-between align-items-center">

                                CUSTOMER REVIEWS
                                <small className='text-danger'>4.5 / 5</small>
                            </div>

                            <div className='px-2 mt-4'>
                                <RatingProgressBar starsNum={5} percentage={86}/>
                                <RatingProgressBar starsNum={4} percentage={9}/>
                                <RatingProgressBar starsNum={3} percentage={2}/>
                                <RatingProgressBar starsNum={2} percentage={1}/>
                                <RatingProgressBar starsNum={1} percentage={1}/>
                            </div>
                        </div>


                        <div className='align-self-center d-flex flex-column align-items-center'>
                            <h3 className='mt-5'>Review This Product</h3>
                            <button className='btn btn-danger mt-3 pr-md-5 pl-md-5' data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop">Review Now
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column mt-md-0 mt-5 px-md-3">
                        <h3 className='card-header border'>Top Reviews from Our Customers</h3>

                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="staticBackdrop"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered mx-auto">
                    <div className="modal-content">
                        <div className="modal-header px-4">
                            <h5 className="modal-title fw-bold" id="staticBackdropLabel">Review Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close" />
                        </div>
                        <div className="modal-body px-4">
                            <form>
                                <div className='mb-3'>
                                    <label htmlFor='rating' className="form-label mb-2">Rating</label>
                                    <select id='rating' className="form-select" aria-label="Default select example">
                                        <option selected>--Rating--</option>
                                        <option value="1">Aad u Liita (5)</option>
                                        <option value="2">Liita (4)</option>
                                        <option value="2">Caadi (3)</option>
                                        <option value="3">Fiican (2)</option>
                                        <option value="3">Aad u fiican (1)</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor='comment' className="form-label mb-2">Comment</label>
                                    <textarea id='comment' className='form-control' rows='3'/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer px-4">
                            <button type="button" className="btn btn-danger ms-3">Post</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Reviews;
