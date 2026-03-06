import React from 'react';

import { Outlet } from 'react-router';
import NavBar from '../NavBar/NavBar';

const Root = () => {
    return (
        <div>
           <NavBar></NavBar>
            <div className='w-11/12 flex justify-center items-center mx-auto mt-10 '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;