import React from 'react';
import './cat.css'
import Products from "../../components/Products";
import data from "../home/data";

const Categories = () => {
    return (
        <div className='row m-0'>
            <div className='col-12 col-md-3 col-lg-2 mt-md-3 p-0 px-md-3 d-flex d-md-block overflow-scroll hidden-scroll'>
                <div className='filter-wrapper d-flex flex-md-column'>
                    <div
                        className='d-none d-md-flex w-100 border rounded bg-light px-3 py-2 justify-content-between align-items-center'>
                        <h4 className='cat-header'>Filter</h4>
                        <i className='fa fa-times text-secondary'/>
                    </div>

                    <FilterItem title='Brand' items={['Samsung', 'Xioami', 'iPhone']}/>

                    <FilterItem title='Price' items={['Less than $100', 'Less than $500', 'Less than $1000', 'Above $1000']}/>

                    <FilterItem title='Arrival' items={['Last 30 days', 'Last 60 days', 'Last 90 days']}/>

                    <FilterItem title='Availability' items={['Include Out of Stock']}/>
                </div>
            </div>

            <div className='col-12 col-md-9 col-lg-10'>
                <Products title='Safar Cusub' subtitle="New Arrive" data={data}/>
            </div>
        </div>
    );
};

const FilterItem = ({title, items}) => {
    return (
        <div className='filter-item rounded mx-2 mx-lg-0'>
            <h5 className='mt-md-3 ms-2 cat-subheader d-flex'>{title} <i className='ms-2 fa fa-caret-down' /> </h5>
            <div className='filter-choices ms-3 d-none d-md-block'>
                {
                    items.map(function (item) {
                        return (
                            <div className="d-flex align-items-center choice-item">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="ms-2 form-check-label" htmlFor="exampleCheck1">{item}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Categories;
