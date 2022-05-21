import React from 'react';
import MaterialIcon from 'react-google-material-icons'

const DegreesEng = () => {
    return (
        <div className='degrees_eng'>
            <div className='lp'>
                <span className='degreeName'>
                    Professionnal Licence IOTIA :
                </span>
                <span className='schoolName'> IUT</span>
                <p className='location'><MaterialIcon icon="location_city"/> Sophia Antipolis</p>
                <p className='details'> rofessionnal Licence oriented IOT, data bases, project management ...</p>
            </div>
            <div className='bts'>
                <span className='degreeName'>
                    H.N.D.  SNIR :
                </span>
                <span className='schoolName'>Lycée Les Eucalyptus</span>
                <p className='location'><MaterialIcon icon="location_city"/> Nice </p>
                <p className='details'>Informatique SN IR, Sciences du Numérique, Informatique et Réseaux.
                Diploma obtained with honours
                </p>
            </div>
            <div className='bac'>
                <span className='degreeName'>
                    A-levels (scientific option) :
                </span>
                <span className='schoolName'>Lycée Auguste Renoir</span>
                <p className='location'><MaterialIcon icon="location_city"/> Cagnes-Sur-Mer</p>
                <p className='details'> Option: ISN, Computer Science Digital Sciences in last year </p>
            </div>
            <div className='brevet'>
                <span className='degreeName'>
                    College Certificate :
                </span>
                <span className='schoolName'> Collège Jules Verne</span>
                <p className='location'><MaterialIcon icon="location_city"/> Cagnes-Sur-Mer</p>
                <p className='details'> Diploma obtained with honours</p>
            </div>

        </div>
    );
};

export default DegreesEng;