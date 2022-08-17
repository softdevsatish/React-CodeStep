import React, { useState } from 'react'

function ControlledCompo() {
    const [val, setVal] = useState("");
    return (
        <div>

            {/* <input type="text" value={val} onChange={(e) => setVal(e.target.value)} /> */}
            <input type="text" defaultValue="0000" onChange={(e) => setVal(e.target.value)} />
            <p>Value: {val}</p>
        </div>
    )
}

export default ControlledCompo