import React, { useState } from 'react';
import Logo from '../Components/Logo';
import Nav from '../Components/Nav';
import Options from '../Components/Options';
import Anatolia from '../Components/EnglishContent/AnatoliaEng';
import Ecovid from '../Components/EnglishContent/EcovidEng';
import Prvt from '../Components/EnglishContent/PrvtEng';

const Projects = () => {
    const list = ["--", "Anatolia", "E-Covid", "PRVT"];
    let [valselected, setValSelected] = useState("");
    const onSelect = (val) => {
        setValSelected(val);
    };
    return (
        <div className='Projects'>
            <Logo />
            <Nav />
            <h1>Projects page</h1>
            <select id='selectProjet' onChange={(e) => onSelect(e.target.value)}>
                {list.map((item) => (
                    <Options value={item} key={item} />
                ))}
            </select>
            {valselected === "Anatolia" && <Anatolia />}
            {valselected === "E-Covid" && <Ecovid />}
            {valselected === "PRVT" && <Prvt />}
        </div>
    );
};

export default Projects;