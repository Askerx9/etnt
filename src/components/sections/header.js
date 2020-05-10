import React from 'react'

// Components
import Scroll from "../scroll/scroll";

// Assets
import Bgmp4 from "../../videos/bg.mp4"
// import Bgwebm from "../../videos/bg.webm"

const SectionHeader = () => {


  return (
    <section className={'section__header'}>

      <h1 className={'title'}>
        Études télécoms <span className={"colored"}>nouvelles technologies</span>
      </h1>
      <p>Votre solution très haut débit</p>

      <Scroll />

      <video className="background-video" loop playsInline autoPlay muted>
        {/* <source src={Bgwebm} type="video/webm" /> */}
        <source src={Bgmp4} type="video/mp4" />
        <p>Votre navigateur ne prend pas en charge les vidéos HTML5.
          Voici <a href={Bgmp4}>un lien pour télécharger la vidéo</a>.</p>
      </video>

    </section>
  )
}

export default SectionHeader