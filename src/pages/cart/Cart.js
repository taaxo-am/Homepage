import React, {useState} from 'react';
import ScrollableProducts from "../../components/ScrollableProducts";

import data from './../home/data'
import img from "../../img/img.png";
import empty from "./empty.png";
import imga from "../../img/a-img.png";
import imga2 from "../../img/a-img2.png";
import imga3 from "../../img/a-img3.png";

import './cart.css'
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import OrderSummary from "./OrderSummary";

const Cart = () => {

    const [items, setItems] = useState([1, 2])

    const removeItem = e => {
        setItems(items => items.filter(item => item !== items.length))
    }

    return (
        <div className='' style={{zIndex:'-1', background: '#EBEBEB'}}>
            {
                items.length > 0 ? (
                    <div className='row m-0'>
                        <div className='col-12 col-md-8 p-4'>
                            {
                                items.map(item => {
                                    return (
                                        <>
                                            <CartItem removeItem={removeItem}/>
                                        </>
                                    )
                                })
                            }
                        </div>

                        <div className='col-12 col-md-4 p-4'>
                            <OrderSummary />
                        </div>
                    </div>
                ) : (
                    <div className='container mx-auto p-5'>
                        <EmptyView />
                    </div>
                )
            }

            <ScrollableProducts title='Alaab lamid ah' subtitle='Recommended Products' data={data}/>

            <div className="row row-cols-1 row-cols-md-3">
                <div className="col">
                    <div className="px-2 py-3 py-md-0"><img className='rounded border border-dark w-100' src={imga}
                                                            alt=""/></div>
                </div>
                <div className="col">
                    <div className="px-2 py-3 py-md-0"><img className='rounded border border-dark w-100' src={imga2}
                                                            alt=""/></div>
                </div>
                <div className="col">
                    <div className="px-2 py-3 py-md-0"><img className='rounded border border-dark w-100' src={imga3}
                                                            alt=""/></div>
                </div>
            </div>
        </div>
    );
};

const EmptyView = () => {
    return (
        <div className='card py-3'>
            <div className='card-body d-flex flex-column align-items-center'>
                <img className='w-25 mx-auto card-img-top' src={empty}/>
                <h3 className='fw-bold text-center m-4'>Your cart is empty</h3>
                <Link to='/'><button className='text-white btn btn-lg btn-danger text-center mx-auto'>Shop now</button></Link>
            </div>
        </div>
    )
}
export default Cart;
