import React from 'react';
import MaterialIcon from 'react-google-material-icons'

const InfoFr = () => {
    return (
        <div className='infoFr'>
            <div className='userName'>
                <MaterialIcon icon="account_box"/>
                <span className='firstName'>Thibaud</span>
                <span className='lastName'> CHARBONNEL</span>
            </div>
            <div className='shortInfo'>
                <p>Je suis actuellement en fin de Licence professionnelle IOTIA (Internet des objets, technologie, infrastructure et application). Je suis donc à la recherche
                     d'un poste à plein temps pour 
                     début Septembre
                </p>
            </div>
            <div className='infoUser'>
                <span className='mail'><MaterialIcon icon="email"/>thibaud.charbonnell@gmail.com</span>
                <span className='adress'><MaterialIcon icon="location_city"/> 14 Rue Maurice Rostand, Bat B1 Cagne-sur-mer</span>
                <span className='birth'><MaterialIcon icon="today"/> Né le 26/07/2000</span>
                <span className='licence'><MaterialIcon icon="directions_car_filled"/> Permis B, Véhicule personnel</span>
                <span className='phone'><MaterialIcon icon="call"/> 06 66 02 56 37</span>
            </div>
            <div className='infoLanguage'>
                <p><MaterialIcon icon="language"/>Langues : </p>
                <span className='lang_english'>Anglais, </span>
                <span className='lang_italian'> Italien</span>
            </div>
            <div className='interests'>
                <div className='sports'>
                    <span><MaterialIcon icon="sports_tennis"/> Tennis, ski, voile</span>
                </div>
                <div className='reading'>
                    <span><MaterialIcon icon="auto_stories"/> Romans d’aventures en Anglais, Revues scientifiques</span>
                </div>
                <div className='globalSkills'>
                    <p><MaterialIcon icon="done"/> Suite Google :</p>
                    <span className='suitGoogle'>
                        Maitrise des logiciels Google Doc, Google Sheets, Data Studio 
                    </span>
                    <p><MaterialIcon icon="done"/> Pack Office :</p>
                    <span className='officePack'>
                        Maîtrise des logiciels Word, PowerPoint et Excel.
                    </span>
                </div>
                <div className='projectExample'>
                    <p><MaterialIcon icon="work"/> Création d'une application Android pour piloter une voiture à distance. Ce projet étant mené par une équipe de quatre personnes, je me suis occupé de la partie communication des informations entre les différents sous-systèmes ainsi que des tests unitaires. </p>
                </div>
            </div>
        </div>
    );
};

export default InfoFr;