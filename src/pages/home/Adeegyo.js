import React from 'react';
import img3 from "../../img/img3.png";
import img33 from "../../img/img33.png";
import img333 from "../../img/img333.png";

const adeegyo = [
    {
        name: 'ADEEGA DALABAADKA',
        img: img3,
        desc: 'Waa adeeg aad ka adeegan karto daafaha dunida',
        pic: img3,
    },
    {
        name: 'ADEEGA DALABAADKA',
        img: img33,
        desc: 'Waa adeeg aad ka adeegan karto daafaha dunida',
        pic: img3,
    },
    {
        name: 'ADEEGA DALABAADKA',
        img: img333,
        desc: 'Waa adeeg aad ka adeegan karto daafaha dunida',
        pic: img3,
    }
]

const Adeegyo = ({twoRows}) => {
    return (
        <div className={`row row-cols-lg-3 row-cols-1 py-0 ${twoRows && 'row-cols-lg-2 row-cols-1'}`}>
            {
                adeegyo.map(function (item) {
                    return (
                        <div className='px-3 py-3 py-md-0'>
                            <div className='rounded col d-flex border p-0 bg-white'>
                                <div className='col-md-7 col-lg-5 col-5'>
                                    <img className='rounded-start h-auto w-100' src={item.img} alt="" />
                                </div>
                                <div className='col-7 col-md-5 col-lg-7 m-0 px-4 d-flex flex-column justify-content-evenly align-items-center'>
                                    <div className='d-flex flex-column justify-content-evenly'>
                                        <h4>{item.name}</h4>
                                        <small>{item.desc}</small>
                                    </div>
                                    <button className='btn btn-danger align-self-start'>Faahfaahin</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Adeegyo;
