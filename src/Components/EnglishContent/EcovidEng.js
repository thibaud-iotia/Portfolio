import React from 'react';

const EcovidEng = () => {
    return (
        <div className='eCovid'>
            <p className='firstPart'>This is an end-of-study project realized during my professional license.
                The project was on the theme of Covid-19 as warning people who were case contact, restrictions on the number of people in a room or the rate of CO2. </p>
            <p className='secondPart'>In this project I took care of the part on the sensors with the help of a colleague. There was the CO2 sensor, the window sensor, the movement sensors to count the number of people entering and leaving a room. The data from the sensors was sent to the main program which analyzed the data and then alerted other sub-programs or directly the user.</p>
            <p className='thirdPart'>I also helped to write the documentation of an API developed by a colleague.
                The purpose of this API was to query the project database, insert new data or update them. </p>

        </div>
    );
};

export default EcovidEng;