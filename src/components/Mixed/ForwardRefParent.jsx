import React from 'react'
import { useRef } from 'react'
import ForwardRefChild from './ForwardRefChild'
function ForwardRefParent() {

    let inputRef = useRef(null);
    function updateInput() {
        inputRef.current.value = 100
    }
    return (
        <div>
            <ForwardRefChild ref={inputRef} />
            <button onClick={updateInput}>CLick</button>
        </div>
    )
}

export default ForwardRefParent