import React from 'react';
import RatingBar from "./RatingBar";

const ProductCard = ({img, name, price}) => {

    return (
        <div className="card rounded-0 hoverable-card">
            <div5 className='d-flex justify-content-center'>
                <img src={img} className="img-fluid w-75 p-1" alt=""/>
            </div5>
            <div className="card-body bg-light">
                <h6 className="card-title text-truncate">{name}</h6>
                <div className='mt-3 d-flex align-items-center justify-content-between'>
                    <RatingBar />
                </div>
                <p className="card-text text-danger mt-2">{price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
