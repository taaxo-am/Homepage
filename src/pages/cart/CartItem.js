import React from 'react';
import img from "../../img/img.png";
import iphone from "../../img/iphone.jpg";

const CartItem = () => {
    return (
        <div className='card mt-3 rounded-3'>
            <div className='card-header bg-white'>Shopping cart (<span className='text-danger'>1</span>)</div>
            <div className='card-body'>
                <div className='row row-cols-2'>
                    <img className='col w-auto' style={{height: '200px'}} src={iphone} alt='' />
                    <div className='col py-3 d-flex flex-column justify-content-center'>
                        <h3>Super Gold Refrigerator 225 (New)</h3>
                        <p>Accessories</p>
                        <p className='mt-2'>In Stock</p>
                        <p className='text-danger fw-bold'>$120</p>
                        <div className='d-flex flex-grow-1 align-items-end mt-3'>
                            <div className='d-flex align-items-center'>
                                <span className='inc-dec-btn'>-</span>
                                <input className='w-25 mx-4 form-control form-control-sm' type='number' value='1' />
                                <span className='inc-dec-btn'>+</span>
                            </div>
                            <i className='fa fa-trash text-danger mb-2'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
