import React from 'react'


// Assets

const Services = () => {

  const services = [
    {
      title: "Télécoms Fixes<br>Fibre Optique",
      children: [
          "Relevés terrain FTTH",
          "Etudes transport et distribution T + D1 / D2",
          "Calcul de charges appuis FT & ENEDIS (CAPFT / COMAC)",
          "Commande d’accès OPGC OWF",
          "DOE",
          "Annexe C3A • MAJ EZAPA • DOE",
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
              <h2>Services</h2>
              <p>Lorem Lipsum</p>
            </div>

            <ul className={"services__list"}>
              {card}
            </ul>
          </div>
        </section>
    )
}

export default Services