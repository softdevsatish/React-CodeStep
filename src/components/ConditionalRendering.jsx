import React from 'react'
import { useState } from 'react'

function ConditionalRendering() {
    const [loggedIn, setLoggedIn] = useState(true);

    // if (loggedIn) {
    //     return (
    //         <div>
    //             <h3>You Are Logged In! Welcome Back!!</h3>
    //         </div>)
    // }
    // else {
    //     return (
    //         <div>
    //             <h3>Logged in First!!</h3>
    //         </div>
    //     )
    // }

    //Above code can also written as
    return (
        loggedIn ? <h2>Welcome Back!!</h2> : <h2> Login First!!</h2>

    );
    // return (

    //     loggedIn === 1 ? <h2>Profile 1</h2> : loggedIn === 2 ? <h2>Profile2</h2> : <h2>Other Profile </h2>
    // )

}


export default ConditionalRendering;