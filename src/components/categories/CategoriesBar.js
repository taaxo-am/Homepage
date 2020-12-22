import React from 'react';
import './catergories.css'
import {Link} from "react-router-dom";

const CategoriesBar = () => {
    return (
        <div
            className='w-100 shadow-sm px-3 py-2 py-md-3 d-flex justify-content-md-center hidden-scroll'
            style={{overflowX: 'auto', zIndex: 10}}>

            <CatItem path='/' icon='fa-home' title='HOME'/>
            <CatItem path='/categories' icon='fa-mobile' title='MOBILES'/>
            <CatItem path='/categories' icon='fa-laptop' title='LAPTOPS'/>
            <CatItem path='/categories' icon='fa-camera' title='CAMERAS'/>
            <CatItem path='/categories' icon='fa-headphones' title='ACCESSORIES'/>
            <CatItem path='/categories' icon='fa-globe' title='GLOBAL'/>
        </div>
    );
};

const CatItem = ({path, icon, title}) => {
    return (
        <Link to={path} style={{ textDecoration: 'none', color: 'black'}}>
            <div
                className='cat-item mx-2 d-flex flex-column flex-md-row flex-column flex-md-row justify-content-center align-items-center'>
                <i className={`fa ${icon}`}/>
                <p className='mx-2 mt-1 mt-md-0 fw-bold'>{title}</p>
            </div>
        </Link>
    )
}

export default CategoriesBar;
