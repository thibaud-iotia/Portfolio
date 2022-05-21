import React from 'react';
import MaterialIcon from 'react-google-material-icons'

const ExperiencesFr = () => {
    return (
        <div className='experiencesFr'>
            <div className='alternship'>
                <p id='title_alternship'>Alternance Veolia/Nice :</p>
                <span className='date'><MaterialIcon icon="today"/> De septembre 2020 à septembre 2021.</span>
                <div className='info_alternship'>
                    <ul>
                        <li>Développement d'une application avec Microsoft Access</li>
                        <li>Mise en place d'un feuille d'astreinte sous Google Sheets</li>
                        <li>Mise en place d'une "application" avec Data Studio ( avec différents scripts Google App Script) </li>
                        <li>Développement d'une application Android avec Android Studio </li>
                    </ul>
                </div>
            </div>
            <div className='seasonWork'>
                <p id='title_seasonWork'>Travail saisonnier, Docaposte Sophia Antipolis :</p>
                <span><MaterialIcon icon="today"/> De juillet 2019 à août 2019.</span>
                <p className='description'>Dans la continuité de mon stage, j'ai assuré la gestion du Parc Informatique :
                    Installation et l'assistance Informatique.</p>
            </div>
            <div className='stage'>
                <p id='title_stage'>Stagiaire, Docaposte Sophia Antipolis :</p>
                <span><MaterialIcon icon="today"/> De juin 2019 à juillet 2019.</span>
                <span className='description'>Gestion du Parc Informatique : Installation et l'assistance Informatique.</span>
            </div>
        </div>
    );
};

export default ExperiencesFr;