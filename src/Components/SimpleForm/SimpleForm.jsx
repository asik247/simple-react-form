import React from 'react';

const SimpleForm = () => {
    // sumbit form handler code start here;
    const handleSubmit = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log("form",e.target);
        console.log(name,email);
    }
    return (
        <div>
            <h1>hi iam react form here</h1>
            {/* Simple form code start here */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder='Your Name:'/>
                <br /><br />
                <input type="email" name="email" id="email" placeholder='Your email:'/><br /><br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;