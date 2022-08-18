import React from 'react'

function PassFunAsProps(props) {
    return (
        <div>
            <h3>Pass Function As Props</h3>
            <button onClick={props.name}>Click for Alert</button>
        </div>
    )
}

export default PassFunAsProps