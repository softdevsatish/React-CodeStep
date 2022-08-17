import React from 'react'
import { useRef } from 'react'

function UsingRef() {

    let inputRef = useRef(null);


    function handleInput() {
        // inputRef.current.value = 1000;
        // inputRef.current.focus();
        // inputRef.current.style.color = "red";
        inputRef.current.style.display = "none"
        console.warn("Hello");
    }
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleInput}>Click</button>

        </div>
    )
}

export default UsingRef