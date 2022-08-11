import { useState } from "react";
export function State() {
    const [data, setData] = useState("Test");
    function updateData() {
        setData("New Test")
    }
    return (

        <div>
            <p>{data}</p>
            <button type='button' onClick={updateData}>Click</button>
        </div>
    )
}
// <button type='button' onClick={() => setData("New Test")}>Click</button>

export default State;