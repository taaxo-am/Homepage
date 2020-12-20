import React from 'react';
import iphone from '../../img/iphone.jpg'
import ProductInfo from "./ProductInfo";
import Reviews from "./Reviews";
import {Link} from "react-router-dom";

const Detail = () => {
    return (
        <div className='container-fluid p-0'>
            <div className="row mt-5 m-0 px-5">
                <div
                    className="col-5 col-md-1 d-md-flex d-none flex-column align-items-center">
                    <img src={iphone} className='border rounded h-auto w-75' alt=""/>
                    <img src={iphone} className='border rounded w-75 mt-2' alt=""/>
                    <img src={iphone} className='border rounded w-75 mt-2' alt=""/>
                    <img src={iphone} className='border rounded w-75 mt-2' alt=""/>
                    <img src={iphone} className='border rounded w-75 mt-2' alt=""/>
                </div>
                <div
                    className="col-12 col-md-4 d-flex flex-column align-items-center">
                    <img src={iphone} className='border rounded w-75' alt=""/>
                    <small>Roll over the image to zoom</small>
                    <button className='btn btn-danger mt-5 pr-5 pl-5 btn-lg'>Buy Now</button>
                </div>
                <div className='col-1'/>
                <div className="col-12 mt-5 mt-md-0 col-md-5 d-flex flex-column">
                    <h3>Canon EOS Rebel T7 DSLR Camera</h3>

                    <p className='text-muted mt-2'>Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in
                        Wi-Fi|24.1 MP CMOS Sensor |DIGIC 4+ Image Processor and Full HD Videos</p>

                    <p className='text-danger font-weight-bold mt-3' style={{fontSize: '18px'}}>$ 250 USD</p>
                    <p>Shipping: Free</p>

                    <div className='mt-3'>
                        <Link to='/checkout'>
                            <button className='btn btn-danger w-50'>Buy Now</button>
                        </Link>
                        <button className='btn btn-outline-danger ms-4'>Add to Cart</button>
                    </div>

                    <ProductInfo />
                </div>
            </div>

            <Reviews />
        </div>
    );
};

export default Detail;
