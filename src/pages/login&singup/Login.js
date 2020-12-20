import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className='container-fluid vh-100 p-0'>
            <div className="row h-100 p-0">
                <div className='col-lg-5 d-lg-block d-none h-100 left-panel m-0 p-0'>
                    <div className='d-flex fw-bolder flex-column mt-5 align-items-end m-0'>
                        <p className='bg-white p-3 rounded-start text-muted w-25'>SIGN IN</p>
                        <Link className='p-3 w-25 text-white' to='/signup'>
                            <p>SIGN UP</p>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-7 col-md-12 d-flex flex-column align-self-center justify-content-center">
                    <h1 className='login-header text-center'>SIGN IN</h1>

                    <form className='login-form d-flex flex-column align-items-center mt-4 w-auto'>
                        <div className='form-group'>
                            <input type="text" placeholder='Username' className='form-control'/>
                        </div>
                        <div className="form-group mt-2">
                            <input type="password" placeholder='Password' className='form-control'/>
                        </div>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Remember me?
                            </label>
                        </div>
                        <div className="form-group mt-4">
                            <Link to='/'>
                                <input type="submit" value='SIGN IN' className='btn btn-danger w-50'/>
                            </Link>
                        </div>
                        <a href='#' className="nav-link m-1">Forgot Password?</a>

                        <div className='d-flex align-items-center'>
                            <hr className='border flex-grow-1'/>
                            <p className='bg-white m-4 text-secondary'>OR</p>
                            <hr className='border flex-grow-1'/>
                        </div>

                        <button className='btn btn-danger btn-sm w-25'><i
                            className='fab fa-google-plus'/>&nbsp;&nbsp;&nbsp;SIGN IN WITH GOOGLE
                        </button>
                        <button className='btn btn-primary btn-sm mt-4 w-25'><i
                            className='fab fa-facebook'/>&nbsp;&nbsp;&nbsp;SIGN IN WITH FACEBOOK
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
