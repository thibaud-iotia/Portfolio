import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='Navigation'>
            <NavLink exact="true" to="/" className={(navData) => navData.isActive ? "active" : "" }>
                Cv
            </NavLink>
            <NavLink exact="true" to="/Projects" className={(navData) => navData.isActive ? "active" : "" }>
                Projects
            </NavLink>
            <NavLink exact="true" to="/About" className={(navData) => navData.isActive ? "active" : "" }>
                About Me
            </NavLink>
        </div>
    );
};

export default Nav;