import React from 'react';

const ActionData = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        // console.log(form);
        const formData = new FormData(form); 
        console.log(formData);
        const name = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password')
        console.log(name,email,password);
    }
    return (
        <div>
            <h1>Using FormDta code here</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="email" name="email" id="email" />
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ActionData;