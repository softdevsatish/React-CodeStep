import { useState } from 'react';

function Toggle() {
    const [status, setStatus] = useState(true);
    return (
        <div>
            {
                status ? <h3 style={{ color: 'grey' }}> hello</h3> : null
            }

            <button onClick={() => { setStatus(!status) }}>Toggle</button>

        </div>
    );
};



export default Toggle;