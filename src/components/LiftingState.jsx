import React from 'react'
import LiftingStateChild from './LiftingStateChild'
function LiftingState() {

    function pAlert(name) {
        alert(name)
    }

    return (
        <div>
            <LiftingStateChild myAlert={pAlert} />
        </div>
    )
}

export default LiftingState