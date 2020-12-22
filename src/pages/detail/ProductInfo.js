import React from 'react';

const ProductInfo = () => {
    return (
        <div className='mt-5'>
            <h5 className='py-2'>Product Details</h5>
            <hr />
            <div className='row m-0 py-3 px-0'>
                <div className="col-5 px-0">
                    <h6 className='fw-bold'>Brand:</h6>
                </div>
                <div className="col-7 px-0">
                    <p>Canon</p>
                </div>
            </div>
            <div className='row'>
                <div className="col-5 px-0">
                    <h6 className='fw-bold'>Color:</h6>
                </div>
                <div className="col-7 px-0">
                    <p>Black</p>
                </div>
            </div>
            <div className='row'>
                <div className="col-5 px-0">
                    <h6 className='fw-bold'>Shooting Modes:</h6>
                </div>
                <div className="col-7 px-0">
                    <p>Scene Intelligent Auto Flash Off Creative Auto Landscape Close-up Sports Food Night Portrait P Tv
                        Av MScene Intelligent Auto Flash Off Creative Auto Landscape Close-up Sports Food Night Portrait
                        P Tv Av M See more
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="col-5 px-0">
                    <h6 className='fw-bold'>Lens:</h6>
                </div>
                <div className="col-7 px-0">
                    <p>Telephoto</p>
                </div>
            </div>
            <div className='row'>
                <div className="col-5 px-0">
                    <h6 className='fw-bold'>Model Name:</h6>
                </div>
                <div className="col-7 px-0">
                    <p>EOS REBEL SL3 (BK) + EF-S18-55mm f/4-5.6 IS STM kit</p>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
