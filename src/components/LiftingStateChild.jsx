import React from 'react'

function LiftingStateChild(props) {
    const name = "Satish";
    return (
        <div>
            <p>Name:</p>
            <button onClick={() => props.myAlert(name)}>Click</button>
        </div >
    )
}

export default LiftingStateChild