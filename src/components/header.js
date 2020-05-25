import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav"
import Scroll from "./scroll/scroll";
import Bgmp4 from "../videos/bg.mp4";



const Header = ({ siteTitle }) => {

  return (
    <header  className={'section__header'}>
      <Nav/>
      <div>
        <h1 className={'title'}>
          Études télécoms <span className={"colored"}>nouvelles technologies</span>
        </h1>
        <p>Votre solution très haut débit</p>
      </div>

      <Scroll />

      <video className="background-video" loop playsInline autoPlay muted>
        {/* <source src={Bgwebm} type="video/webm" /> */}
        <source src={Bgmp4} type="video/mp4" />
        <p>Votre navigateur ne prend pas en charge les vidéos HTML5.
          Voici <a href={Bgmp4}>un lien pour télécharger la vidéo</a>.</p>
      </video>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
