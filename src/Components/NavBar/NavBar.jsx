import React, { useState } from 'react';
import { NavLink } from 'react-router'; // as you requested

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    
                    {/* Logo */}
                    <div className="flex-shrink-0 font-bold text-2xl text-blue-600">
                        Logo
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <NavLink to="/">SimpleForm</NavLink>
                        <NavLink to="/action">ActionData</NavLink>
                        <NavLink to="/controlData">ControlData</NavLink>
                        <NavLink to="/controlData2">ControlData2</NavLink>
                        <NavLink to="/unControlData">UnControlData</NavLink>
                    </div>

                    {/* LogOut Button */}
                    <div className="hidden md:block">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                            LogOut
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 pb-8 space-y-4 space-x-2">
                    <NavLink to="/" onClick={() => setIsOpen(false)}>SimpleForm</NavLink>
                    <NavLink to="/action" onClick={() => setIsOpen(false)}>ActionData</NavLink>
                    <NavLink to="/controlData" onClick={() => setIsOpen(false)}>ControlData</NavLink>
                    <NavLink to="/controlData2" onClick={() => setIsOpen(false)}>ControlData2</NavLink>
                    <NavLink to="/unControlData">UnControlData</NavLink>


                    <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-2">
                        LogOut
                    </button>
                </div>
            )}
        </nav>
    );
};

export default NavBar;