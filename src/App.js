import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import CategoriesBar from "./components/categories/CategoriesBar";
import Footer from "./components/footer/Footer";
import Cart from "./pages/cart/Cart";

function App() {
    return (
        <Router>

            <TopBar/>

            <CategoriesBar/>

            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/cart'>
                    <Cart/>
                </Route>
            </Switch>

            <Footer/>
        </Router>
    );
}

export default App;
