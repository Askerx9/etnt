import React from "react"
import ParticlesBackground from "../modules/particlesBackground";

const presentation = () => {
  return (
    <section className={"section__presentation"} id={"presentation"}>
      <div className={"container"}>
        <div className={"section_title"}>
          <h2>NOTRE HISTOIRE</h2>
          <p>qui sommes-nous ?</p>
        </div>
        <div className={"section__presentation_content"}>
          <p>
            Créé en 2012, la société ETNT est devenue aujourd’hui une référence dans le déploiement
            de fibre optique FTTH en France.
          </p>
          <p>
            Bureau d’étude, spécialisé en ingénierie télécom, reconnu depuis plusieurs années passées
            au service de grands groupes français leader sur ce marché.
          </p>
          <p>
            Aujourd’hui, à travers notre équipe soudée d’hommes et de femmes, notre société
            compte à son actif la réalisation de plusieurs milliers d’études FTTH.
            Notre empreinte s’étend des rues de Paris, à celles de Marseille, tout en passant par
            Lyon, mais aussi Toulouse, Lille, Bordeaux, Rouen, Nancy, Annecy, Reims, Roubaix, Cholet,
            Annemasse, Le Mans, Nantes, Brest, Aix en Provence et tant d’autres.
          </p>
          <p>
            ETNT, est un acteur à part entière dans le «Plan France 100 % Très Haut Débit » ainsi que
            dans le développement de smart cities
          </p>
        </div>
      </div>
      <ParticlesBackground/>
    </section>
  )
}

export default presentation
