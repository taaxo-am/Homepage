import React, {useState} from 'react';
import data from "../../pages/home/data";
import logo from "../../img/logo.png";
import './topbar.css'
import {Link, NavLink} from "react-router-dom";

const TopBar = () => {

    const [menuShown, setMenuShown] = useState(false)

    const updateMenuState = e => {
        setMenuShown(prevState => !prevState)
    }

    return (
        <div className='topbar'>
            <Link to='/'>
                <div className="logo">
                    <img src={logo} alt="" style={{width: '250px'}}/>
                </div>
            </Link>
            <form action="#" className='position-relative'>
                <input className="search-view" placeholder="Search..." required/>

                <div className='search-view-autocomplete position-absolute bg-white border w-100 mt-5 shadow-lg'
                     style={{zIndex: 50}}>
                    {
                        data.map(item => {
                            return (
                                <div className='hoverable-primary d-flex p-3'>
                                    <img style={{width: '40px'}} src={item.img} alt=""/>
                                    <div className="d-flex flex-column ms-3">
                                        <p className=''>{item.title}</p>
                                        <p className='fw-bold'>{item.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </form>

            <div className={`nav-items ${menuShown ? 'd-block' : 'd-none'} d-lg-flex flex-column flex-md-row`}>
                <Link to='/login'><li><a href="#">Login</a></li></Link>
                <Link to='/signup'><li><a href="#">Sign up</a></li></Link>
            </div>

            <div className='cart d-flex align-items-start'>
                <NavLink to='/cart'><i className='fa fa-shopping-cart'/></NavLink>
                <span className="ms-1 badge rounded-pill bg-red-darken">8</span>
            </div>

            <div className='bars' onClick={updateMenuState}>
                <i className={`fa ${!menuShown ? 'fa-bars' : 'fa-times'}`}/>
            </div>
        </div>
    );
};

export default TopBar;
