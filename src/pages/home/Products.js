import React from 'react';
import img1 from '../../img/iphone.jpg'
import ProductCard from "../../components/ProductCard";
import 'bootstrap/dist/js/bootstrap.bundle.min'


const Products = ({img, title, subtitle, data}) => {
    return (
        <div className='row p-3'>
            {
                img && (
                    <div className={`col-2 d-none d-lg-block p-0 border ${img.right ? 'order-3': 'order-0'}`}>
                        <img className='position-relative w-100 m-0 h-100' style={{objectFit: 'cover'}} src={img.img} alt=""/>
                    </div>
                )
            }

            <div className={`col-lg-10 col-auto ${!img && 'col-lg-12'} card rounded-0 p-0 order-1`}>
                <div className='card-header bg-white'>{title} <span className='text-muted'>| {subtitle}</span></div>
                <div className='card-body'>
                    <div className='row h-100 row-cols-2 row-cols-md-4 row-cols-lg-5'>
                        {
                            data.map(item => {
                                return (
                                    <div key={item.id} className='col'>
                                        <div className='p-2'>
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
