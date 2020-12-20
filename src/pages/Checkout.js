import React from 'react';
import OrderSummary from "./cart/OrderSummary";
import CartItem from "./cart/CartItem";

import zaad from "./../img/Zaad.png";
import eDahab from "./../img/e-dahab.png";
import shilling from "./../img/shilling.png";

const Checkout = () => {
    return (
        <div className='' style={{zIndex: '-1', background: '#EBEBEB'}}>
            <div className='row m-0'>
                <div className='col-12 col-md-7 p-3 p-md-4'>
                    <ShippingInfo />
                    <PaymentMethods />
                    <CartItem />
                </div>
                <div className='col-12 col-md-5 p-3 p-md-4'>
                    <OrderSummary/>
                </div>
            </div>
        </div>
    );
};

const PaymentMethods = () => {
    return (
        <div className='card mt-3'>
            <div className='card-header bg-white'>Payment Methods</div>
            <div className='row row-cols-1 row-cols-md-3 card-body py-4 px-5'>
                <img src={zaad} alt=""/>
                <img src={eDahab} alt=""/>
                <img src={shilling} alt=""/>
            </div>
        </div>
    )
}

const ShippingInfo = () => {
    return (
        <div className='card'>
            <div className='card-header bg-white'>Shipping Information</div>
            <div className='card-body py-4 px-5'>
                <form>
                    <div className="d-flex flex-column flex-md-row">
                        <div className="w-100 mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name"/>
                        </div>
                        <div className="w-100 ms-md-3 mb-3">
                            <label htmlFor="phone" className="form-label">Number</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="code">+252</span>
                                <input type="phone" className="form-control" id="name"
                                       aria-describedby='code'/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row">
                        <div className="w-100 mb-3">
                            <label htmlFor="name" className="form-label">Address</label>
                            <input type="text" className="form-control" id="name"/>
                        </div>
                        <div className="w-100 ms-md-3 mb-3">
                            <label htmlFor="phone" className="form-label">Street</label>
                            <input type="phone" className="form-control" id="name" aria-describedby='code'/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-danger my-2">Confirm</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout;
