import React from 'react'

import { useState, useEffect } from 'react'
function UseEffectHooks() {

    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Use Effect");
    })

    return (
        <div><h4>UseEffect : {count}</h4>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default UseEffectHooks