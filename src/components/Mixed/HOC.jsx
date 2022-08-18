import React from "react";
import { useState } from "react";

function HOC() {
    return (
        <div>
            <p>HOC</p>
            <Red cmp={Counter} />
            <White cmp={Counter} />
            <Green cmp={Counter} />
        </div>
    )
}
function Red(props) {
    return (
        <div>
            <p style={{ backgroundColor: "#D2691E", width: "200px" }}><props.cmp /></p>
        </div >
    )
}

function White(props) {

    return (
        <div>
            <p style={{ backgroundColor: "#F4FFF4", width: "200px" }}><props.cmp /></p>
        </div >
    )
}
function Green(props) {
    return (
        <div>
            <p style={{ backgroundColor: "#006400", width: "200px" }}><props.cmp /></p>
        </div>
    )
}
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )

}


export default HOC;