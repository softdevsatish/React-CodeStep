import React from 'react'
import { withRouter } from 'react-router-dom'


function User(props) {
    return (
        <div>
            <h3>User Id: {props.match.params.id}</h3>
            <h3>Name: {props.match.params.name}</h3>
        </div>
    )
}

export default withRouter(User);