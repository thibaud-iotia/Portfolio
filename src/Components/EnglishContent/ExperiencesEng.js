import React from 'react';
import MaterialIcon from 'react-google-material-icons'

const ExperiencesEng = () => {
    return (
        <div className='experiences_eng'>
            <div className='alternship'>
                <p id='title_alternship'>Apprenticeship in Software development, Veolia Nice :</p>
                <span className='date'><MaterialIcon icon="today"/> From september 2020 to september 2021</span>
                <div className='info_alternship'>
                    <ul>
                        <li>Development of an application with Microsoft Access</li>
                        <li>Implementation of an on-call sheet with Google Sheets</li>
                        <li>Development of an application with Data Studio (with different Google App Script)</li>
                        <li>Development of an Android application with Android Studio</li>
                    </ul>
                </div>
            </div>
            <div className='seasonWork'>
                <p id='title_seasonWork'>Seasonal Work, Docaposte Sophia Antipolis :</p>
                <span><MaterialIcon icon="today"/> From july 2019 to august 2019</span>
                <p>In the continuity of my internship, I was in charge of the management of the computer park:
                    Installation and computer assistance.</p>
            </div>
            <div className='stage'>
                <p id='title_stage'>Internship, Docaposte Sophia Antipolis :</p>
                <span><MaterialIcon icon="today"/> From june 2019 to july 2019</span>
                <span> Management of the Data-processing Park: Installation and data-processing assistance.</span>
            </div>
        </div>
    );
};

export default ExperiencesEng;