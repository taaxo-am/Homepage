import React from 'react';
import './home.css'

import 'bootstrap/dist/js/bootstrap.bundle'

import data from './data'

// Components
import header from "../../img/header.png";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import Products from "./Products";

// Images
import img from '../../img/img.png'
import img1 from '../../img/img1.jpg'
import img22 from '../../img/img-22.png'
import img4 from '../../img/img4.jpg'
import imga from '../../img/a-img.png'
import imga2 from '../../img/a-img2.png'
import imga3 from '../../img/a-img3.png'
import Adeegyo from "./Adeegyo";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div className='wrapper p-0'>
            <TopBar/>

            <NavBar/>

            <img src={header} className='img-fluid' alt=""/>

            <Products title='Safar Cusub' subtitle="New Arrive" img={{img: img1}} data={data}/>

            <Adeegyo/>

            <Products title='Safar Cusub' subtitle="New Arrive" img={{img: img4, right: true}} data={data}/>

            <div className="row row-cols-1 row-cols-md-3">
                <div className="col">
                    <div className="px-2 py-3 py-md-0"><img className='border border-dark w-100' src={imga} alt=""/></div>
                </div>
                <div className="col">
                    <div className="px-2 py-3 py-md-0"><img className='border border-dark w-100' src={imga2} alt=""/></div>
                </div>
                <div className="col">
                    <div className="px-2 py-3 py-md-0"><img className='border border-dark w-100' src={imga3} alt=""/></div>
                </div>
            </div>

            <Products title='Alaabta ugu iibsiga badan' subtitle="Trending" img={{img: img22}} data={[...data].splice(0, 5)}/>

            <Products title='Alaabta ugu iibsiga badan' subtitle="Trending" data={[...data].splice(0, 5)}/>

            <Adeegyo/>

            <Products title='Safar Cusub' subtitle="New Arrive" img={{img: img}} data={data}/>

            <Products title='Alaabta ugu iibsiga badan' subtitle="Trending" data={[...data].splice(0, 5)}/>

            <Products title='Alaabta ugu iibsiga badan' subtitle="Trending" data={[...data].splice(0, 5)}/>

            <Footer/>
        </div>
    );
};

export default Home;