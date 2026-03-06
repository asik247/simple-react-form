import React from 'react';

const SimpleForm = () => {

    // form sumbit code start here;
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, name);
    }
    return (
        <div>
            <h1>Explore React Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder='Your Name:' /><br />
                <input type="email" name="email" id="email" placeholder='Your email:' /><br />
                <input type="password" name="password" id="password" placeholder='Type Pin' /><br /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;