import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import InfoEng from '../Components/EnglishContent/InfoEng'
import DegreesEng from '../Components/EnglishContent/DegreesEng'
import ExperiencesEng from '../Components/EnglishContent/ExperiencesEng'
import SkillsEng from '../Components/EnglishContent/SkillsEng'


const CvEnglish = () => {
    const [isActive, setActive] = useState("info");

    const navActive = (val) => {
        //get navLinks 
        let _info = document.getElementById("info");
        let _pro = document.getElementById("pro");
        let _skills = document.getElementById("skills");
        let _project = document.getElementById("projects");
        let _degrees = document.getElementById("degrees");
        val = val.toString();
        //set active section
        setActive(val);
        switch (val) {
            case "info":
                _info.className = "active";
                _pro.className = "";
                _skills.className = "";
                _degrees.className = "";
                break;
            case "pro":
                _info.className = "";
                _pro.className = "active";
                _skills.className = "";
                _degrees.className = "";
                break;
            case "skills":
                _info.className = "";
                _pro.className = "";
                _skills.className = "active";
                _degrees.className = "";
                break;
            case "projects":
                _info.className = "";
                _pro.className = "";
                _skills.className = "";
                _project.className = "active";
                _degrees.className = "";
                break;
            case "degrees":
                _info.className = "";
                _pro.className = "";
                _skills.className = "";
                _degrees.className = "active";
                break;
            default:
                _info.className = "active";
                _pro.className = "";
                _skills.className = "";
                _degrees.className = "";
                break;
        }
    };
    return (
        <div className='englishCv'>
            <div className='vertical-menu'>
                <NavLink id="info" exact="true" to="#info" className={(navData) => navData.isActive ? "active" : "" } onClick={(e) => navActive(e.target.id)}>
                    Informations
                </NavLink>
                <NavLink id="pro" exact="true" to="#Experiences" className={(navData) => navData.isActive ? "" : "" } onClick={(e) => navActive(e.target.id)}>
                    Professional experiences
                </NavLink>
                <NavLink id='skills' exact="true" to="#skills" className={(navData) => navData.isActive ? "" : "" } onClick={(e) => navActive(e.target.id)}>
                    Skills
                </NavLink>
                <NavLink id='degrees' exact="true" to="#degrees" className={(navData) => navData.isActive ? "" : "" } onClick={(e) => navActive(e.target.id)}>
                    Degrees and training
                </NavLink>
            </div>
            {isActive === "info" && <InfoEng /> }
            {isActive === "pro" && <ExperiencesEng /> }
            {isActive === "skills" && <SkillsEng /> }
            {isActive === "degrees" && <DegreesEng /> }
        </div>
    );
};

export default CvEnglish;