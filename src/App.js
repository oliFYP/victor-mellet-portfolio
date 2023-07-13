import './App.css';
import './hover.css';
import './mobileView.css'
import bdc from './image/Image.jpeg';
import { MdLocationOn } from 'react-icons/md';
import {FaPhone } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FaCar } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { AiOutlineBook } from 'react-icons/ai';


function App() {
  const [isScolaireFullscreen, setIsScolaireFullscreen] = useState(false);
  const [isStageFullscreen, setIsStageFullscreen] = useState(false);

  const handleScolaireClick = () => {
    setIsScolaireFullscreen(!isScolaireFullscreen);
   
  };
  const handleStageClick = () => {
    setIsStageFullscreen(!isStageFullscreen);
   
  };
  return (
    <div>
      <div className="layout">

        <div className={`Personal-info ${isScolaireFullscreen ? 'isScolaireFullscreen' : ''}${isStageFullscreen ? 'isStageFullscreen' : ''}`}>
          <img src={bdc} className='bdc' draggable='false' ></img>
          <div className="container-1">
          <h1>Victor Mellet</h1>
            <div className="location-container">
              <MdLocationOn className="location-icon" />
              
              <p>Briancon</p>
            </div>
            <div className="phone-container">
              <FaPhone className="Phone-icon" />
              <p>06.25.43.53.12</p>
            </div>
            <div className="email-container">
              <AiOutlineMail className="Email-icon" />
              <p>melletvictor@gmail.com</p>
            </div>
            <div className="car-container">
              <FaCar className="Car-icon" />
              <p>Permis B (véhiculé)</p>
            </div>
            <div className="Birthday-container">
              <AiOutlineCalendar className="Birthday-icon" />
              <p>07/06/2002</p>
            </div>
          </div>
          
        </div>
        
        <div className= {`grad-container ${isScolaireFullscreen ? 'isScolaireFullscreen' : ''}${isStageFullscreen ? 'isStageFullscreen' : ''}`}>
        <div className="Graduation-container" onClick={handleScolaireClick}>
        <FaGraduationCap className="graduation-icon" />
          <h1>Parcours scolaire</h1>
        </div>
        <div className={`briefcase ${isScolaireFullscreen ? 'isScolaireFullscreen' : ''}${isStageFullscreen ? 'isStageFullscreen' : ''}`}>
        <div className="Briefcase-container" onClick={handleStageClick}>
        <FaBriefcase className="Briefcase-icon" />
          <h1>Expérience Professionelle</h1>
        </div>
        </div>
        
        </div>
        <div className={`mech ${isScolaireFullscreen ? 'isScolaireFullscreen' : ''}${isStageFullscreen ? 'isStageFullscreen' : ''}`}>
        <div className="mech-container">
        <FaCog className="mec-icon" />
          <h1>Competences Scientifiques et techniques</h1>
        </div>
        <div className="book-container">
        <AiOutlineBook className="book-icon" />
          <h1>Competences transversales</h1>
        </div>
        </div>
        <div className={`scolaire ${isScolaireFullscreen ? 'fullscreen' : ''}${isStageFullscreen ? 'isStageFullscreen' : ''}`}>
        
           <h1>B.U.T MESURES PHYSIQUES 2ÈME ANNEE (2021-2022)</h1>
           <h2>IUT1: Grenoble</h2>
        
           <li> Projet: Réalisation d'un oxymètre, conversion signal analogique/numérique, électronique, optique, traitement du signal</li>
           <li> Projet: Réalisation complète d'une radio: autonomie, apprentissage de méthodes de soudure et de gravure chimique. Connaissance en électronique.</li>
           <li> Encadrant plongeur universitaire sur un semestre à U-Dive.</li>

           <h1>BACCALAUREAT GENERAL, ASSEZ-BIEN(2020)</h1>
           <h2>Lycée d'altitude, Briançon</h2>
           <li> Bac S spécialité maths</li>
           <li> Préparation millitaire marine en parallèle de mon année de Terminale (2019-2020, major de promotion)</li>
           <button className="exit-button" onClick={handleScolaireClick}>
            Retour
          </button>
          </div>
   
        
          
        

        
         
          <div className={`stage ${isStageFullscreen ? 'fullscreen' : ''}`}>
           <h1>STAGE TECHNIQUE AU CEA 11 SEMAINES (16 JANVIER-31 MARS 2023)</h1>
           <h2>CEA liten Grenoble laboratoire LCA</h2>
        
           <p>Dans le cadre de mon IUT Mesures Physique: étude de microstructure sur tubes inox,
             attaques chimiques, test d'étanchéité.</p>
             <h1>RÉSERVISTE DE LA MARINE NATIONALE(EN COURS)</h1>
             <h2>Base navale de Toulon</h2>
             <p>Opérateur défense : surveiller et filtrer les sites 
              sensibles militaires à pied ou véhiculé.</p>
              <h1>AIDE-PEINTRE CDD JUILLET (2021)</h1>
              <h2>Ferrero peinture, Briançon</h2>
              <p>Poncer, peindre et véhiculer la manœuvre pendant 
                1 mois sur chantier.</p>
                <button className="exit-button" onClick={handleStageClick}>Retour</button>
          </div>
          
       
        
      </div>
    </div>
  );
}

export default App;
