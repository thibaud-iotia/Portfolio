import React from 'react';

const Others = () => {
    return (
        <div >
            <NavLink exact to="/Gmail">
                Gmail
            </NavLink>
            <NavLink exact to="/Github">
                Github
            </NavLink>
        </div>
    );
};

export default Others;