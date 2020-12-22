import React from 'react';

const OrderSummary = () => {
    return (
        <div className='order-summary card d-flex justify-content-center mt-md-3'>
            <h3 className='card-header'>Order Summary</h3>
            <div className='card-body px-5 px-md-3 px-lg-5 py-3'>
                <div className='row row-cols-2 row-cols-md-1 row-cols-lg-2 py-3'>
                    <h5>Sub Total</h5>
                    <h5 className='fw-bold mt-md-3 mt-lg-0'>$350</h5>
                    <h5 className='mt-3'>Shipping</h5>
                    <h5 className='mt-3 fw-bold'>Free</h5>
                </div>
            </div>
            <div className='card-footer bg-white'>
                <div className='d-flex justify-content-between px-4 my-4'>
                    <h4>Total</h4>
                    <h4 className='text-danger'>$240</h4>
                </div>
                <button className='mb-2 card-link btn btn-danger w-100'>Buy Now</button>
            </div>
        </div>
    )
}

export default OrderSummary;
