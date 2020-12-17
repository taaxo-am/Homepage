import React from 'react';
import './catergories.css'

const CategoriesBar = () => {
    return (
        <div
            className='w-100 shadow-sm px-3 py-2 py-md-3 d-flex  justify-content-md-center hidden-scroll' style={{overflowX: 'auto', zIndex: 10}}>
            <div className='cat-item mx-2 d-flex flex-column flex-md-row flex-column flex-md-row justify-content-center align-items-center'>
                <i className='fa fa-home'/>
                <p className='mx-2 mt-1 mt-md-0 fw-bold'>HOME</p>
            </div>
            <div className='cat-item mx-2 d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <i className='fa fa-mobile'/>
                <p className='mx-2 mt-1 mt-md-0 fw-bold'>MOBILES</p>
            </div>
            <div className='cat-item mx-2 d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <i className='fa fa-laptop'/>
                <p className='mx-2 mt-1 mt-md-0 fw-bold'>LAPTOPS</p>
            </div>
            <div className='cat-item mx-2 d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <i className='fa fa-camera'/>
                <p className='mx-2 mt-1 mt-md-0 fw-bold'>CAMERAS</p>
            </div>
            <div className='cat-item mx-2 d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <i className='fa fa-headphones'/>
                <p className='mx-2 mt-1 mt-md-0 fw-bold'>ACCESSORIES</p>
            </div>
            <div className='cat-item mx-2 d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <i className='fa fa-globe'/>
                <p className='mx-2 mt-1 mt-md-0 fw-bold'>GLOBAL</p>
            </div>
        </div>
    );
};

export default CategoriesBar;
