import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import InfoFr from '../Components/FrenchContent/InfoFr'
import DegreesFr from '../Components/FrenchContent/DegreesFr'
import ExperiencesFr from '../Components/FrenchContent/ExperiencesFr'
import SkillsFr from '../Components/FrenchContent/SkillsFr'

const CvFrench = () => {
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
        <div className='frenchCv'>
            <div className='vertical-menu'>
                <NavLink id="info" exact="true" to="#info" className={(navData) => navData.isActive ? "active" : "" } onClick={(e) => navActive(e.target.id)}>
                    Informations
                </NavLink>
                <NavLink id="pro" exact="true" to="#Experiences" className={(navData) => navData.isActive ? "" : "" } onClick={(e) => navActive(e.target.id)}>
                    Expériences professionnelles  
                </NavLink>
                <NavLink id='skills' exact="true" to="#skills" className={(navData) => navData.isActive ? "" : "" } onClick={(e) => navActive(e.target.id)}>
                    Compétences
                </NavLink>
                <NavLink id='degrees' exact="true" to="#degrees" className={(navData) => navData.isActive ? "" : "" } onClick={(e) => navActive(e.target.id)}>
                   Diplômes 
                </NavLink>
            </div>
            {isActive === "info" && <InfoFr /> }
            {isActive === "pro" && <ExperiencesFr /> }
            {isActive === "skills" && <SkillsFr /> }
            {isActive === "degrees" && <DegreesFr /> }
        </div>
    );
};

export default CvFrench;