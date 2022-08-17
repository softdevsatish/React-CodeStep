import React, { useEffect } from 'react'

function UseEffectSpecChild(props) {

    useEffect(() => {
        console.log("Count is: ", +props.count);
    }, [props.data, props.count]);




    return (
        <div>
            <h3>Count: {props.count}</h3>

            <h3>Data: {props.data}</h3>
        </div>
    )
}

export default UseEffectSpecChild