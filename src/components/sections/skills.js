import React from 'react'


// Assets
import calendar from "../../images/skills/calendar.png"
import candidate from "../../images/skills/candidate.png"
import debitCard from "../../images/skills/debit-card.png"
import quality from "../../images/skills/quality.png"
import software from "../../images/skills/software.png"
import userExperience from "../../images/skills/user-experience.png"


const Skills = () => {

    return (
        <section className="skills" id={"skills"}>
          <div className="container">
            <div className={"section_title"}>
              <h2>Compétences</h2>
              <p>Lorem Lipsum</p>
            </div>

            <ul>
              <li className="skills__el card">
                <img src={software} alt=""/>
               <div>
                 <p className="bold">Logiciel</p>
                 <p>CAP FT - COMAC - AutoCAD - Géofibre - SISSI - IPON - Q-GSIS - OPTINET - IW3 - NetGEO</p>
               </div>
              </li>
              <li className="skills__el card">
                <img src={debitCard} alt=""/>
                <div>
                  <p className="bold">Prix</p>
                  <p>Partenariat avec des société off-shore = tarifs compétitifs<br />
                    • Facturation à la tâche<br />
                    • Délais de paiement
                  </p>
                </div>
              </li>
              <li className="skills__el card">
                <img src={quality} alt=""/>
                <div>
                  <p className="bold">Qualité</p>
                  <p>Contrôle-Qualité interne sustématique avant livraison Fiche Auto-Contrôle</p>
                </div>
              </li>
              <li className="skills__el card">
                <img src={candidate} alt=""/>
                <div>
                  <p className="bold">Expérience</p>
                  <p>+ de 5 ans d'esperiences Dessinateurs expérimentés (+ de 9 ans d'expériences) Polyvalence de projets</p>
                </div>
              </li>
              <li className="skills__el card">
                <img src={userExperience} alt=""/>
                <div>
                  <p className="bold">Sécurité</p>
                  <p>
                    Confidentialité<br/>
                    • Adaptation<br/>
                    • Equipe jeune<br/>
                    • Solutions personnalisées<br/>
                    • Ecoute active
                  </p>
                </div>
              </li>
              <li className="skills__el card">
                <img src={calendar} alt=""/>
                <div>
                  <p className="bold">Reactivité</p>
                  <p>Respect des délais
                    Traitement des urgences
                    Adaptation aux différentes
                    exigences clients
                    Disponibilité 6j/7
                  </p>
                </div>
              </li>


            </ul>
          </div>
        </section>
    )
}

export default Skills