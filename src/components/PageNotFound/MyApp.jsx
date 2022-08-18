import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './style.css';
import Page404 from './Page404';
function MyApp() {
    return (
        <div className='main'>
            <BrowserRouter>
                <Link to='/'>Home</Link> <br /> <br />
                <Link to='/about'>About</Link><br /> <br />
                <Link to='/login'>Login</Link>

                <Switch>
                    <Route path='/' exact={true}><Home /></Route>
                    <Route path='/about'><About /></Route>
                    <Route path='*'><Page404 /></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MyApp