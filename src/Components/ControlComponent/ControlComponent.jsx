import React, { useState } from 'react';

const ControlComponent = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handle = (e) => {
        e.preventDefault();
        console.log(name, email);
    }

    return (
        <div className="flex items-center justify-center min-h-screen ">

            <div className="bg-white shadow-xl rounded-2xl p-8 w-96">

                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    UseState Control Form
                </h1>
               

                <form onSubmit={handle} className="space-y-4">

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
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

export default ControlComponent;