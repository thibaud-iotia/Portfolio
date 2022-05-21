import React from 'react';

const Options = (props) => {
    const {value} = props;
    return (
        <option value={value}>{value}</option>
    );
};

export default Options;