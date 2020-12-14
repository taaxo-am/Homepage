import React from 'react';
import img3 from "../../img/img3.png";

const adeegyo = [
    {
        name: 'ADEEGA DALABAADKA',
        desc: 'Waa adeeg aad ka adeegan karto daafaha dunida',
        pic: img3,
    },
    {
        name: 'ADEEGA DALABAADKA',
        desc: 'Waa adeeg aad ka adeegan karto daafaha dunida',
        pic: img3,
    },
    {
        name: 'ADEEGA DALABAADKA',
        desc: 'Waa adeeg aad ka adeegan karto daafaha dunida',
        pic: img3,
    }
]

const Adeegyo = () => {
    return (
        <div className='row row-cols-lg-3 row-cols-1 py-3'>
            {
                adeegyo.map(function (item) {
                    return (
                        <div className='px-3 py-3 py-md-0'>
                            <div className='col d-flex border p-0 bg-white'>
                                <div className='col-5'>
                                    <img className='h-auto w-100' src={img3} alt="" />
                                </div>
                                <div className='col-7 m-0 px-4 d-flex flex-column justify-content-evenly align-items-center'>
                                    <div className='d-flex flex-column justify-content-evenly'>
                                        <h4>{item.name}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                    <button className='btn btn-danger rounded-0 align-self-start'>Faahfaahin</button>
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
