import React from 'react'


// Assets
import calendar from "../../images/skills/calendar.png"
import candidate from "../../images/skills/candidate.png"
import debitCard from "../../images/skills/debit-card.png"
import quality from "../../images/skills/quality.png"
import software from "../../images/skills/software.png"
import userExperience from "../../images/skills/user-experience.png"
import padLock from "../../images/skills/padlock.png"


const Skills = () => {

  const data = [
    {icon: software,title: "Logiciels", text: "CAP FT - COMAC - AutoCAD - Géofibre - IPON - Q-GSIS - OPTINET - IW3 - NetGEO - REFSITES – ARCGIS"},
    {icon: debitCard,title: "Prix", text: "• Facturation à la tâche<br /> • Délais de paiement <br> • Tarifs compétitifs "},
    {icon: quality,title: "Qualité & réactivité", text: "Contrôle-Qualité interne systématique avant livraison<br>Fiche Auto-Contrôle<br>Respect des délais<br>Traitement des urgences <br>Disponibilité 6j/7"},
    {icon: candidate,title: "Expérience & clé en main", text: "+ de 8 ans d&#39;expériences dans l’activité des télécoms<br>Dessinateurs seniors (+ de 9 ans d&#39;expériences)<br>Divers projets sur l’ensemble du territoire français<br>Solution « clé en main » relevés d’informations terrains + études dans nos bureaux"},
    {icon: padLock,title: "Sécurité", text: "Confidentialité des données<br>Sensibilisation interne à la sécurité informatique<br>Audit interne et externe sur notre système d’information<br>Conformité à la norme RGPD"},
    {icon: calendar,title: "Formation interne", text: "Cellule de formation interne pour garantir les mises à jours d’ingénieries<br>Adaptation aux divers cahiers des charges clients"},
  ]

  const cards = data.map((el, index) => {
    return (
        <li className="skills__el card" key={index}>
          <img src={el.icon} alt=""/>
          <div>
            <p className="bold" dangerouslySetInnerHTML={{__html: el.title}}></p>
            <p dangerouslySetInnerHTML={{__html: el.text}}></p>
          </div>
        </li>
    )
  })

    return (
        <section className="skills" id={"skills"}>
          <div className="container">
            <div className={"section_title"}>
              <h2>Nos Compétences</h2>
            </div>

            <ul>
              {cards}
            </ul>
          </div>
        </section>
    )
}

export default Skills