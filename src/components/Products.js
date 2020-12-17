import React from 'react';
import img1 from '../img/iphone.jpg'
import ProductCard from "./ProductCard";
import 'bootstrap/dist/js/bootstrap.bundle.min'


const Products = ({img, title, subtitle, data}) => {
    return (
        <div className='row p-1 my-3 mx-2'>
            {
                img && (
                    <div className={`col-2 d-none d-lg-block p-0 ${img.right ? 'order-3': 'order-0'}`}>
                        <img className='position-relative w-100 m-0 h-100' style={{objectFit: 'cover'}} src={img.img} alt=""/>
                    </div>
                )
            }

            <div className={`col-lg-10 col-auto rounded-0 ${!img && 'col-lg-12'} ${img && img.right ? 'rounded-start' : 'rounded-end'} card p-0 order-1`}>
                <div className='card-header bg-white'><p>{title} <span className='text-muted'>- {subtitle}</span></p></div>
                <div className='card-body bg-light p-0'>
                    <div className='row h-100 row-cols-2 row-cols-md-4 row-cols-lg-5 p-0 px-1 pb-2 gx-2 gy-2'>
                        {
                            data.map(item => {
                                return (
                                    <div key={item.id} className='col mt-2'>
                                        <div className=''>
                                            <ProductCard img={item.img} name={item.title} price={item.price}/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;