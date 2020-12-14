import React from 'react';
import logo from "../img/logo.png";
import data from "../pages/home/data";

const TopBar = () => {
    return (
        <div className='navbar row bg-red align-items-center'>
            <div className='col-3'>
                <img className='mh-50' src={logo} alt=""/>
            </div>
            <form className='col-5 position-relative p-0'>
                <input type="text" className="search-view rounded-0 border border-warning shadow-sm form-control w-100" placeholder='Raadi Alaabo...'/>
                <div className='search-view-autocomplete position-absolute bg-white border w-100 mt-2 shadow-lg' style={{zIndex: 50}}>
                    {
                        data.map(item => {
                            return (
                                <div className='hoverable-primary d-flex p-3'>
                                    <img style={{width: '40px'}} src={item.img} alt=""/>
                                    <p>{item.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </form>
            <div className='col-3 d-md-block d-none'>
                <button className='btn btn-light rounded-0 mx-3'>SIGN UP</button>
                <button className='btn btn-outline-light rounded-0'>SIGN IN</button>
            </div>
            <div className='col d-flex flex-column align-items-center'>
                <small className="rounded-circle bg-warning text-center border border-white fw-bold ms-2" style={{width: '18px', height: '18px', fontSize: '12px'}}>9</small>
                <i className='shopping-cart-icon fa fa-shopping-cart' style={{fontSize: '26px'}}/>
            </div>
        </div>
    );
};

export default TopBar;
