import { useState } from 'react';
import './css/style.css'
function HandleForm() {

    // function handleSubmit(event) {
    //     event.preventDefault();

    // }
    // Also above code can be written as
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name, opt, term);
    };

    const [name, setName] = useState(null);
    const [opt, setOpt] = useState(null);
    const [term, setTerm] = useState(null);
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>

                <p><input type="text" name='name' onChange={(e) => setName(e.target.value)} placeholder="Enter Name" /></p>
                <p>
                    <select onChange={(e) => setOpt(e.target.value)}>
                        <option>Select Subject</option>
                        <option>Math</option>
                        <option>Bio</option>
                        <option>Art</option>
                    </select>
                </p>

                <p><input type="checkbox" onChange={(e) => setTerm(e.target.checked)} /><span>Terms & Conditions</span></p>
                <button type='submit'>Submit</button>

            </form>
        </div>
    );
};


export default HandleForm;