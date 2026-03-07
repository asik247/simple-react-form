import React, { useState } from 'react';

const ControlComponent3 = () => {
    // control components cd start her now;

    const [pin, setPin] = useState('')
    const [error, setError] = useState('');
    // pin handle hre ;
    const handlePin = (e) => {
        e.preventDefault();
        const pinValue = e.target.value;
        setPin(pinValue)
        // condition pin length cheack;
        // if (pin.length < 6) {
        //     setError('pin must be 6 character or longer.')
        // }
        // else {
        //     setError('')
        // }
        // console.log(pin);

    }
    // submit hanlde code start hre;
    const submitHandle = (e) => {
        e.preventDefault();
        console.log(pin);
         if (pin.length < 6) {
            setError('pin must be 6 character or longer.')
        }
        else {
            setError('')
        }

    }

    return (
        <div className="flex items-center justify-center min-h-screen ">

            <div className="bg-white shadow-lg rounded-2xl p-8 w-96">

                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Control Component 3
                </h1>

                <form onSubmit={submitHandle} className="space-y-4">

                    <input
                        type="password"
                        value={pin}
                        onChange={handlePin}
                        placeholder="Pin"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="email"


                        placeholder="Your Email"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input

                        type="text"

                        placeholder="Enter Any Text"
                        className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />


                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                    {/* error code */}
                    <p className='text-red-500 font-bold mt-5 text-center'>{error}</p>

                </form>
              


            </div>
            

        </div>
    );
};

export default ControlComponent3;