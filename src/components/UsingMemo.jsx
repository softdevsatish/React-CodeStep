import React from 'react'
import { useState, useMemo } from 'react';

function UsingMemo() {
    const [add, setAdd] = useState(0);
    const [multi, setMulti] = useState(1);

    const myMemo = useMemo(function newAdd() {
        console.log("New Add");
        return add * 10

    }, [add]);


    return (
        <div>

            <p>Addition: {add}</p>
            <p>Multiply: {multi}</p>
            <p>New Add: {myMemo}</p>
            <button onClick={() => setAdd(add + 1)}>add</button>
            <button onClick={() => setMulti(multi * 5)}>multi</button>
        </div>

    )
}

export default UsingMemo