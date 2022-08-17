import React, { useState } from 'react'

const FormValidation = () => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setpassErr] = useState(false);
    const handleSubmit = (e) => {
        // if (userId.length < 3 || password.length < 5) {
        //     alert("Enter Valid ID/Password")
        // }
        // else {
        //     alert("All is Well!!")
        // }
        e.preventDefault();
    }
    const userHandler = (e) => {
        let validIdLength = e.target.value;
        if (validIdLength.length < 3) { setUserErr(true) }
        else { setUserErr(false) } setUserId(validIdLength);
    }

    const passwordHandler = (e) => {
        let validIdLength = e.target.value;
        if (validIdLength.length < 5) { setpassErr(true) }
        else { setpassErr(false) } setPassword(validIdLength);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Login Form</h3>
                <p><input type="text" placeholder='Enter User ID' onChange={userHandler} />{userErr ? <span>User Id must be Greater Than 2 Chars</span> : ""}</p>
                <p><input type="text" placeholder='Password' onChange={passwordHandler} />{passErr ? <span>Password Length must be Greater Than 4 Chars</span> : ""}</p>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default FormValidation;