import React from 'react';

const ProductInfo = () => {
    return (
        <div className='mt-5'>
            <h5 className='p-2'>Product Details</h5>
            <hr className='mx-2'/>
            <div className='row m-0 py-3 px-0'>
                <div className="col-5">
                    <h6>Brand:</h6>
                </div>
                <div className="col-7">
                    <p>Canon</p>
                </div>
            </div>
            <div className='row'>
                <div className="col-5">
                    <h6>Color:</h6>
                </div>
                <div className="col-7">
                    <p>Black</p>
                </div>
            </div>
            <div className='row'>
                <div className="col-5">
                    <h6>Shooting Modes:</h6>
                </div>
                <div className="col-7">
                    <p>Scene Intelligent Auto Flash Off Creative Auto Landscape Close-up Sports Food Night Portrait P Tv
                        Av MScene Intelligent Auto Flash Off Creative Auto Landscape Close-up Sports Food Night Portrait
                        P Tv Av M See more
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="col-5">
                    <h6>Lens:</h6>
                </div>
                <div className="col-7">
                    <p>Telephoto</p>
                </div>
            </div>
            <div className='row'>
                <div className="col-5">
                    <h6>Model Name:</h6>
                </div>
                <div className="col-7">
                    <p>EOS REBEL SL3 (BK) + EF-S18-55mm f/4-5.6 IS STM kit</p>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
