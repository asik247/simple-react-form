import React, { useRef } from 'react';

const UnControlData2 = () => {
    // useRef code start hre;
    const nameRef = useRef('');
    const passwordRef = useRef('');
    const textRef = useRef('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        const nameValue = nameRef.current.value;
        const passwordValue = passwordRef.current.value;
        const textValue = textRef.current.value;
        console.log(nameValue,passwordValue,textValue);
    }
    return (
        <div className="flex items-center justify-center min-h-screen ">

            <div className="bg-white shadow-2xl rounded-xl p-8 w-96">

                <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
                    Login Form (Uncontrolled2)
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <input
                        ref={nameRef}
                        type="text"
                        placeholder="Enter your Name"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Enter your password"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        ref={textRef}
                        type="text"
                        placeholder="Enter Any Text"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>

                </form>

            </div>

        </div>
    );
};

export default UnControlData2;