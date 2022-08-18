import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
function TestRouting() {
    return (
        <div>
            <Router>
                <Link to="/home" >Home</Link>

                <Link to="/about" >About</Link>

                <Route path="/home" > <Home /></Route>
                <Route path="/about" > <About /></Route>



            </Router>
        </div>
    )
}


function Home() {
    return (

        <div><p>Home Page</p></div>
    )
}

function About() {
    return (
        <div>
            <p>About Page</p>
        </div>
    )
}

export default TestRouting