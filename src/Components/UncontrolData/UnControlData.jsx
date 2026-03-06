import React, { useRef } from 'react';

const UnControlData = () => {
    // userRef code start hre;
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(e.current);
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;
        console.log(emailValue,passwordValue);

    }
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-96">
                <h1>uncontrol usign useRef</h1>
                <form onSubmit={handleSubmit} className="space-y-4">


                    <input ref={emailRef} type="email" name="" className=' className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"' />

                    <input ref={passwordRef} type="password" name="" className=' className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"' />

                    <button className='btn'>OnSubmit</button>
                


                </form>
            </div>
        </div>
    );
};

export default UnControlData;