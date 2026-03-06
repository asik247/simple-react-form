import React, { useState } from 'react';

const ControlComponent2 = () => {
    const [myName, setMyName] = useState('');
    const [myEmail, setMyEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(myName, myEmail);
        // Submit করার পরে input clear করতে চাইলে:
        setMyName('');
        setMyEmail('');
    }

    return (
        <div className="flex items-center justify-center min-h-screen ">

            <div className="bg-white shadow-lg rounded-2xl p-8 w-96">

                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Control Component 2
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        value={myName}
                        onChange={(e) => setMyName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="email"
                        value={myEmail}
                        onChange={(e) => setMyEmail(e.target.value)}
                        placeholder="Your Email"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>

                </form>

            </div>

        </div>
    );
};

export default ControlComponent2;