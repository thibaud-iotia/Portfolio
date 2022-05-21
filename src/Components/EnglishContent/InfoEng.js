import React from 'react';
import MaterialIcon from 'react-google-material-icons'

const InfoEng = () => {
    return (
        <div className='info_eng'>
            <div className='userName'>
                <MaterialIcon icon="account_box"/>
                <span className='firstName'>Thibaud</span>
                <span className='lastName'> CHARBONNEL</span>
            </div>
            <div className='shortInfo'>
                <p>I am currently at the end of my professional degree IOTIA (Internet of Things, Technology, Infrastructure and Application). I would like to
                    to continue my studies by doing a Master's degree in alternation.
                </p>
            </div>
            <div className='infoUser'>
                <span className='mail'><MaterialIcon icon="email"/>thibaud.charbonnell@gmail.com</span>
                <span className='adress'><MaterialIcon icon="location_city"/> 14 Rue Maurice Rostand, Bat B1 Cagne-sur-mer</span>
                <span className='birth'><MaterialIcon icon="today"/> Né le 26/07/2000</span>
                <span className='licence'><MaterialIcon icon="directions_car_filled"/> Licence b, Personal vehicle</span>
                <span className='phone'><MaterialIcon icon="call"/> 06 66 02 56 37</span>
            </div>
            <div className='infoLanguage'>
                <p><MaterialIcon icon="language"/> Langues : </p>
                <span className='lang_english'>English, </span>
                <span className='lang_italian'> Italian</span>
            </div>
            <div className='interests'>
                <div className='sports'>
                    <span><MaterialIcon icon="sports_tennis"/> Tennis, <MaterialIcon icon="downhill_skiing"/> ski, <MaterialIcon icon="scuba_diving"/> nautical sports</span>
                </div>
                <div className='reading'>
                    <span><MaterialIcon icon="auto_stories"/> Adventure novels in English</span>
                </div>
                <div className='globalSkills'>
                    <p><MaterialIcon icon="done"/> Google suite :</p>
                    <span className='suitGoogle'>
                        Mastery of Google Doc, Google Sheets, Data Studio</span>
                    <p><MaterialIcon icon="done"/> Office pack :</p>
                    <span className='officePack'>
                        Skills in Word, PowerPoint and Excel.</span>
                </div>
                <div className='projectExample'>
                    <p><MaterialIcon icon="work"/> Creation of an Android application to drive a car remotely. This project being led by a team of four people, I took care of the communication part of the information between the different subsystems.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoEng;