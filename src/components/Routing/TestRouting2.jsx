import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
function TestRouting() {
    return (
        <div>


            <Nav />
            <Route path="/" exact={true}> <Home /></Route>
            <Route path="/about" > <About /></Route>




        </div>
    )
}





export default TestRouting