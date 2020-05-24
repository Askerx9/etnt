import React from 'react'
import ParticlesBackground from "../modules/particlesBackground";


// Assets

const Services = () => {

  const services = [
    {
      title: "Télécoms Fixes<br>Fibre Optique",
      children: [
          "Relevés terrain FTTH RBAL, Relevé Chambre Souterraine &amp; FOA, Relevé Appui FT / ENEDIS, Visite Technique Immeuble",
          "Etudes transport et distribution T + D1 / D2 - APS APD",
          "Calcul de charges appuis FT &amp; ENEDIS (CAPFT / COMAC)",
          "Commande d’accès OPGC",
          "DOE"
      ]
    },{
      title: "Télécoms<br>Mobiles",
      children: [
          "Déclaration Préalable (DP)",
          "Dossier d'Information Mairie (DIM)",
          "Avant-Projet Simplifié (APS) Avant-Projet Détaillé (APD)",
          "Note de calcul de charges pylône",
          "Dossier COMSIS",
          "DOE (Reportages photos - fiche accès)",
      ]
    },{
      title: "Smart<br>City",
      children: [
          "Energies renouvelables",
          "Boitier intelligent",
          "Eclairage Public",
      ]
    },
  ]

  const card = services.map((service, index) => {

    const children = service.children.map((child, index) => {
      return (
          <li className={"children__el"} key={index}> {child }</li>
      )
    })

    return (
        <li className={"card services__el"} key={index}>
          <p className={"bold"} dangerouslySetInnerHTML={{__html: service.title}}></p>
          <ul className={"services__children"}>
            {children}
          </ul>
        </li>
    )
  })

    return (
        <section className="services" id={"services"}>
          <div className="container">
            <div className={"section_title"}>
              <h2>nos Services</h2>
              <p>3 pôles d'expertise </p>
            </div>

            <ul className={"services__list"}>
              {card}
            </ul>
          </div>
            <ParticlesBackground/>
        </section>
    )
}

export default Services