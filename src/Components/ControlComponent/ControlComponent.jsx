import React, { useState } from 'react';

const ControlComponent = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handle = (e) => {
        e.preventDefault();
        console.log(name, email);
    }

    return (
        <div>
            <h1>Use State-Control Component</h1>

            <form onSubmit={handle}>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    placeholder='Your Name'
                />

                <br />

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder='Your Email'
                />

                <br /><br />

                <button type='submit'>Submit</button>

            </form>
        </div>
    );
};

export default ControlComponent;