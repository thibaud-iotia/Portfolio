import React from 'react';
import MaterialIcon from 'react-google-material-icons'

const DegreesFr = () => {
    return (
        <div className='degreesFr'>
            <div className='lp'>
                <span className='degreeName'>
                    LP IOTIA :
                </span>
                <span className='schoolName'> IUT</span>
                <p className='location'><MaterialIcon icon="location_city"/> Sophia Antipolis</p>
                <p className='details'> Licence professionnelle orientée internet des objets, base de données, gestion de projets ...</p>
            </div>
            <div className='bts'>
                <span className='degreeName'>
                    BTS SNIR :
                </span>
                <span className='schoolName'> Lycée Les Eucalyptus</span>
                <p className='location'><MaterialIcon icon="location_city"/> Nice </p>
                <p className='details'>Informatique SN IR, Sciences du Numérique, Informatique et Réseaux
                    Mention Félicitations au dernier semestre </p>
            </div>
            <div className='bac'>
                <span className='degreeName'>
                    BAC Série S :
                </span>
                <span className='schoolName'> Lycée Auguste Renoir</span>
                <p className='location'><MaterialIcon icon="location_city"/> Cagnes-Sur-Mer</p>
                <p className='details'> Option : ISN, Informatique Sciences du Numérique en terminale</p>
            </div>
            <div className='brevet'>
                <span className='degreeName'>
                    Brevet des Collèges :
                </span>
                <span className='schoolName'> Collège Jules Verne</span>
                <p className='location'><MaterialIcon icon="location_city"/> Cagnes-Sur-Mer</p>
                <p className='details'> Diplôme obtenu avec mention Bien</p>
            </div>
        </div>
    );
};

export default DegreesFr;