import React, { useState } from 'react';
import Nav from '../Components/Nav';
import Logo from '../Components/Logo';
import Options from '../Components/Options';
import CvEnglish from '../Components/CvEnglish';
import CvFrench from '../Components/CvFrench';

const Cv = () => {
    const list = ["--","English Cv","French Cv"];
    let [valselected, setValSelected] = useState("");
    const onSelect = (val) => {
        setValSelected(val);
        console.log(valselected);
    };
    return (
        <div className='Cv'>
            <Logo/>
            <Nav />
            <h1>My CV (French/English)</h1>
            <select id='selectCv' onChange={(e) => onSelect(e.target.value)}>
                {list.map((item) => (
                    <Options value = {item} key={item} />
                ))}
            </select>
            {valselected === "English Cv" && <CvEnglish /> }
            {valselected === "French Cv" && <CvFrench /> }
        </div>
    );
};

export default Cv;