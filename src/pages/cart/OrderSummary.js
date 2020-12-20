import React from 'react';

const OrderSummary = () => {
    return (
        <div className='card d-flex justify-content-center mt-md-3'>
            <div className='card-body px-5 py-3'>
                <h3 className='card-title mx-2 my-3'>Order Summary</h3>
                <div className='row row-cols-2 pt-3'>
                    <p>Sub Total</p>
                    <h5>$350</h5>
                    <p className='mt-3'>Shipping</p>
                    <h5 className='mt-3'>Free</h5>
                </div>

                <hr className='mt-5'/>

                <div className='d-flex justify-content-between px-4 my-4'>
                    <h4>Total</h4>
                    <h4 className='text-danger'>$240</h4>
                </div>
                <button className='mb-3 card-link btn btn-lg btn-danger w-100'>Buy Now</button>
            </div>
        </div>
    )
}

export default OrderSummary;
