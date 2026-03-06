import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto mt-5'>
            <div className='font-bold text-2xl'>
                <h1>Logo</h1>
            </div>
            <div>
                <ul className='flex gap-4'>
                    <NavLink to={'/'}>SimpleForm</NavLink>
                    <NavLink to={'action'}>ActionData</NavLink>
                    <NavLink to={'controlData'}>ControlData</NavLink>
                    <NavLink to={'controlData2'}>ControlData2</NavLink>

                </ul>
            </div>
            <div>
                <button className='btn btn-ghost'>LogOut</button>
            </div>
        </div>
    );
};

export default NavBar;