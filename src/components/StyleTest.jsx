import React from 'react'
import './CSS/style.css'
import style from './CSS/custom.module.css';
function StyleTest() {
    return (
        <div className='main'>
            <h1 className='header'>Main Heading</h1>
            <h2 style={{ backgroundColor: "grey" }}>Sub Heading</h2>
            <h3 className={style.header3}>Modular CSS</h3>
        </div>
    )
}

export default StyleTest