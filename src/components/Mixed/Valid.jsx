import React from 'react'
import { useState } from 'react';

export default function Valid() {
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e) {
        if ((userId.length < 3) || (password.length < 5)) {
            alert("Invalid User Id and Password")
        } else {
            alert("Everything is OK!!")
        }
        e.preventDefault();
    };
    function userIdHandler(e) {
        let inputUserId = e.target.value;
        if (inputUserId.length < 3) {
            setUserErr(true);
        }
        else {
            setUserErr(false);
        }
        setUserId(inputUserId);

    }

    function passHandler(e) {
        let inputPass = e.target.value;
        if (inputPass.length < 5) {
            setPassErr(true);
        }
        else {
            setPassErr(false);
        }
        setPassword(inputPass)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <p><input type="text" placeholder='User ID' onChange={userIdHandler} />{userErr ? <span>User ID must be min. 3 Characters</span> : ""}</p>
                <p><input type="text" placeholder='Password' onChange={passHandler} />{passErr ? <span>Password must be min. 5 Characters!</span> : ""}</p>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
