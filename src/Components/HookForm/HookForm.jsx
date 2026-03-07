import React from 'react';
import useMyHook from '../../Hooks/useMyHook';

const HookForm = () => {
    const [name, handleNameChange] = useMyHook('')
    // email use for custom hook;
    const [email,handlEmailChange] = useMyHook('')
    const handleSumbit = e => {
        e.preventDefault()
        console.log(name,email);
    }
    return (
        <div className="flex items-center justify-center min-h-screen ">

            <div className="bg-white shadow-lg rounded-2xl p-8 w-96">

                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Hooks Form
                </h1>

                <form onSubmit={handleSumbit} className="space-y-4">

                    <input
                        type="password"

                        placeholder="Pin"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="email"

                        value={email}
                        onChange={handlEmailChange}
                        placeholder="Your Email"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input

                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Enter Name"
                        className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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

export default HookForm;