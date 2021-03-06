import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import CategoriesBar from "./components/categories/CategoriesBar";
import Footer from "./components/footer/Footer";
import Cart from "./pages/cart/Cart";
import Detail from "./pages/detail/Detail";
import Checkout from "./pages/Checkout";
import ThankU from "./pages/ThankU";
import Login from "./pages/login&singup/Login";
import Signup from "./pages/login&singup/Signup";
import Filter from "./pages/filter/Filter";

function App() {
    return (
        <Router>
            <Switch>

                <Route exact path='/login'>
                    <Login/>
                </Route>

                <Route exact path='/signup'>
                    <Signup/>
                </Route>


                <Switch>
                    <Route exact path='/'>
                        <TopBar/>

                        <CategoriesBar/>
                        <Home/>
                        <Footer/>

                    </Route>

                    <Route path='/categories'>
                        <TopBar/>

                        <CategoriesBar/>
                        <Filter/>
                        <Footer/>
                    </Route>

                    <Route path='/details'>
                        <TopBar/>

                        <CategoriesBar/>
                        <Detail/>
                        <Footer/>
                    </Route>

                    <Route path='/cart'>
                        <TopBar/>

                        <CategoriesBar/>
                        <Cart/>
                        <Footer/>
                    </Route>
                    <Route path='/checkout'>
                        <TopBar/>

                        <CategoriesBar/>
                        <Checkout/>
                        <Footer/>
                    </Route>
                    <Route path='/thanks'>
                        <TopBar/>

                        <CategoriesBar/>
                        <ThankU/>
                        <Footer/>
                    </Route>
                </Switch>
            </Switch>
        </Router>
    );
}

export default App;
