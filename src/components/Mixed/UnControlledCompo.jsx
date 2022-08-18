import React from 'react'
import { useRef } from 'react';

function UnControlledCompo() {
    let inputRef = useRef(null);
    let inputRef2 = useRef(null);
    function submitHandler(e) {
        e.preventDefault();
        console.warn("First Input Field:", inputRef.current.value);
        console.warn("Second Input Field:", inputRef2.current.value);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <p><input ref={inputRef} type="text" /></p>
                <p><input ref={inputRef2} type="text" /></p>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default UnControlledCompo