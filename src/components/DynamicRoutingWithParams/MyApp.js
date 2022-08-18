import React from 'react';
import User from './User';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
function MyApp() {

    let users = [
        { id: 1, name: "Satish", city: "Delhi" },
        { id: 2, name: "Dhanesh", city: "Noida" },
        { id: 3, name: "Rajesh", city: "Ghaziabad" },
        { id: 23, name: "Ravin", city: "Ayodhya" }

    ]
    return (
        <div>
            <Router>
                <h3>Dynamic Routing</h3>
                {
                    users.map((item) =>
                        <div>
                            <Link to={"/user/" + item.id + "/" + item.name}><h3>{item.name}</h3></Link>
                        </div>
                    )
                }
                <Route path="/user/:id/:name"><User /></Route>
            </Router>
        </div >
    )
}

export default MyApp