import React from 'react';
import {NavLink} from "react-router-dom";

const ProductCard = ({img, name, price}) => {

    return (
        <NavLink to='/details' style={{textDecoration: 'none'}}>
            <div className="card hoverable-card">
                <div5 className='d-flex justify-content-center'>
                    <img src={img} className="img-fluid w-75 p-1" alt=""/>
                </div5>
                <div className="card-body bg-white">
                    <h6 className="card-title">{name}</h6>
                    <p className="card-text text-dark mt-3 fw-bold">{price}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default ProductCard;
