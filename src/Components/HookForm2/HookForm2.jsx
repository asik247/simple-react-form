import React from 'react';
import useMyHooks2 from '../../Hooks2/useMyHooks2';

const HookForm2 = () => {
    const [name,handleNameChange] = useMyHooks2('');
    const[email,handeEmailChange] = useMyHooks2('')
    const [password,handPassword] = useMyHooks2('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name,email,password);
    }
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Hooks Form 2
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="password"
                        value={password}
                        onChange={handPassword}
                        placeholder="Pin"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={handeEmailChange}
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

export default HookForm2;