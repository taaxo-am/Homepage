import React from 'react';

const NavBar = () => {
    return (
        <nav className='d-flex justify-content-center shadow-sm p-3'>
            <div className='nav-item px-1 px-md-4 d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <i className='fa fa-home'/>
                <p className='mx-2'>HOME</p>
            </div>
            <div className='nav-item px-1 px-md-4 d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <i className='fa fa-mobile'/>
                <p className='mx-2'>MOBILES</p>
            </div>
            <div className='nav-item px-1 px-md-4 d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <i className='fa fa-laptop'/>
                <p className='mx-2'>LAPTOPS</p>
            </div>
            <div className='nav-item px-1 px-md-4 d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <i className='fa fa-camera'/>
                <p className='mx-2'>CAMERAS</p>
            </div>
            <div className='nav-item px-1 px-md-4 d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <i className='fa fa-accessories'/>
                <p className='mx-2'>ACCESSORIES</p>
            </div>
            <div className='nav-item px-1 px-md-4 d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <i className='fa fa-globe'/>
                <p className='mx-2'>GLOBAL</p>
            </div>
        </nav>
    );
};

export default NavBar;
