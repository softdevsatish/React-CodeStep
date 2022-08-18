import React from 'react'

function Child(props) {
    return (
        <div>
            <h3>Child Component</h3>
            <button onClick={props.name}>Click for Alert</button>
        </div>
    )
}

export default Child