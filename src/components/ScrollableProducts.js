import React from 'react';
import ProductCard from "./ProductCard";
import {useEffect, useState} from "react";
import SkeletonProduct from "../skeletons/SkeletonProduct";

const ScrollableProducts = ({title, subtitle, data}) => {

    const [localData, setLocalData] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setLocalData(data)
        }, 5000)
    }, [data])

    return (
        <div className='p-1 my-3 mx-2'>
            <div className='card p-0'>
                <div className='card-header bg-white'><p>{title} <span className='text-muted'>- {subtitle}</span></p>
                </div>
                <div className='card-body bg-light p-0'>
                    <div className='d-flex w-100 h-100 p-0 px-1 pb-2 gx-2 gy-2 hidden-scroll'
                         style={{overflowX: 'scroll'}}>
                        {
                            localData
                                ? (localData.map(item => {
                                    return (
                                        <div key={item.id} className='mt-2'>
                                            <div className='w-100 px-1' style={{minWidth: '140px'}}>
                                                <ProductCard img={item.img} name={item.title} price={item.price}/>
                                            </div>
                                        </div>
                                    )
                                }))
                                : (
                                    [1, 2, 3, 4, 5].map((n) =>
                                        <div key={n} className='col mt-2'>
                                            <SkeletonProduct classes='scroll'/>
                                        </div>
                                    )
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollableProducts;
