import React from 'react';

const SimpleForm = () => {
    return (
        <div>
            <h1>hi iam react form here</h1>


            {/* Simple form code start here */}
            <form>
                <input type="text" name="name" id="name" placeholder='Your Name:'/>
                <br /><br />
                <input type="email" name="email" id="email" placeholder='Your email:'/><br /><br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;