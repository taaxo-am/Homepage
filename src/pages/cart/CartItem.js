import React from 'react';
import img from "../../img/img.png";
import iphone from "../../img/iphone.jpg";

const CartItem = ({removeItem}) => {
    return (
        <div className='card mt-3 rounded-3'>
            <div className='card-header bg-white'>Order Review</div>
            <div className='card-body'>
                <div className='row'>
                    <img className='col-12 col-md-4 w-auto mx-auto' style={{height: '200px'}} src={iphone} alt='' />
                    <div className='col-12 col-md-8 px-4 py-3 px-md-0 d-flex flex-column justify-content-center'>
                        <h3>Super Gold Refrigerator 225 (New)</h3>
                        <p className='text-muted mt-2'>Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi|24.1 MP CMOS Sensor |DIGIC 4+ Image Processor and Full HD Videos</p>

                        <p className='mt-2'>In Stock</p>
                        <p className='text-danger fw-bold'>$120</p>
                        <div className='d-flex flex-grow-1 align-items-end mt-3'>
                            <div className='d-flex align-items-center'>
                                <span className='inc-dec-btn'>-</span>
                                <input className='w-25 mx-4 form-control form-control-sm' type='number' value='1' />
                                <span className='inc-dec-btn'>+</span>
                            </div>
                            <i className='fa fa-trash text-danger mb-2' style={{fontSize: '20px', cursor: 'pointer'}} onClick={removeItem}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
