import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div className='flex'>
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <ul>
                    <NavLink to={'action'}>ActionData</NavLink>
                    <NavLink to={'controlData2'}>ControlData</NavLink>
                    <NavLink to={'formData'}>FormData</NavLink>
                    <NavLink to={'controlData'}>ControlData2</NavLink>
                </ul>
            </div>
            <div>
                <button className='btn btn-ghost'>LogOut</button>
            </div>
        </div>
    );
};

export default NavBar;