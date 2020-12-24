import React from 'react';
import img from '../assets/img/thanx.png'

const ThankU = () => {
    return (
        <div className='container mx-auto d-flex justify-content-center py-5'>
            <div className='card w-75'>
                <div className='card-body bg-white p-0'>
                    <div className='d-flex flex-column align-items-center px-2'>
                        <h1 className='mt-3'>THANK YOU</h1>
                        <p className='my-3'>Ka adeego Muraadso mar-walba iyo meel-walba</p>
                        <button className='px-5 mb-5 btn btn-danger'>Shop Again</button>
                    </div>
                    <img className='img-fluid' src={img} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ThankU;
