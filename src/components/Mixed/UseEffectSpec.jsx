import React, { useState } from 'react'
import UseEffectSpecChild from './UseEffectSpecChild'


function UseEffectSpec() {
    const [data, setData] = useState(10);
    const [count, setCount] = useState(100);

    return (
        <div>

            <UseEffectSpecChild count={count} data={data} />
            <button onClick={() => setCount(count + 1)}>Update Count</button> <br /><br />
            <button onClick={() => setData(data + 1)}> Update Data</button>
        </div>
    )
}

export default UseEffectSpec