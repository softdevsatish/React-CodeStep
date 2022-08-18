import React from 'react'

function StudentProps(props) {

    console.log(props);
    return (
        <div className="student">
            <div>Name: {props.name}</div>
        </div>
    )
}

export default StudentProps