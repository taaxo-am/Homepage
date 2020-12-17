import React from 'react';
import ScrollableProducts from "../../components/ScrollableProducts";

import data from './../home/data'
import iphone from "../../img/iphone.jpg";
import img from "../../img/img.png";
import imga from "../../img/a-img.png";
import imga2 from "../../img/a-img2.png";
import imga3 from "../../img/a-img3.png";

import './cart.css'
import CartItem from "./CartItem";
const Cart = () => {
    return (
        <div className='' style={{background: '#EBEBEB'}}>

            <div className='row'>
                <div className='col-7 p-4'>
                    <CartItem />
                    <CartItem />
                </div>

                <div className='col-4 offset-12 p-4'>
                    <div className='card rounded-3 d-flex mt-3 justify-content-center'>
                        <div className='card-body px-5 py-4'>
                            <h3 className='card-title mx-2 my-3'>Order Summary</h3>
                            <div className='row row-cols-2'>
                                <p>Sub Total</p>
                                <h5>USD $350</h5>
                                <p className='mt-3'>Shipping</p>
                                <h5 className='mt-3'>Free</h5>
                            </div>

                            <hr className='mt-5' />
                            <button className='mt-3 card-link btn btn-lg btn-danger w-100'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <ScrollableProducts title='Alaab lamid ah' subtitle='Recommended Products' data={data} />

            <div className="row row-cols-1 row-cols-md-3">
                <div className="col">
                    <div className="px-2 py-3 py-md-0"><img className='rounded border border-dark w-100' src={imga} alt=""/></div>
                </div>
                <div className="col">
                    <div className="px-2 py-3 py-md-0"><img className='rounded border border-dark w-100' src={imga2} alt=""/></div>
                </div>
                <div className="col">
                    <div className="px-2 py-3 py-md-0"><img className='rounded border border-dark w-100' src={imga3} alt=""/></div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
