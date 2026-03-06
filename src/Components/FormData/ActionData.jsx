import React from 'react';

const ActionData = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');

        console.log(name, email, password);
    }

    return (
        <div className="flex justify-center items-center min-h-screen ">

            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

                <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
                    Using ActionFormData
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
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

export default ActionData;