import React, { useState } from 'react';

const ControlComponent2 = () => {
    // useSate code here;
    const [myName,setMyName] = useState('');
    const [myEmail,setMyEmail] = useState('');

    // handle funk code here now;
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(myEmail,myName);
    }


    return (
        <div>
            <h1>Control Component 2</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={myName} onChange={(e)=>setMyName(e.target.value)} />
                <br /><br />

                <input type="email" value={myEmail} onChange={(e)=>setMyEmail(e.target.value)} />
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ControlComponent2;