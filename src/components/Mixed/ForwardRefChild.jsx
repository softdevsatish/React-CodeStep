import React from 'react'
import { forwardRef } from 'react'

function ForwardRefChild(props, myRef) {
    return (
        <div>
            <input type="text" ref={myRef} />
        </div>
    )
}

export default forwardRef(ForwardRefChild);