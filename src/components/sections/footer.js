import React from 'react'


// Assets
import Logo from "../../images/logo.svg"


const Footer = () => {

  return (
    <footer>
      <div className={'container'}>
        <button className={'footer__return-to-top'}>return</button>
        <img className={'footer__logo'} src={Logo} alt="Etnt" />

        <ul className={'footer__nav'}>
          <li><a href="#">Link Test</a></li>
          <li><a href="#">Link Test</a></li>
          <li><a href="#">Link Test</a></li>
          <li><a href="#">Link Test</a></li>
          <li><a href="#">Link Test</a></li>
        </ul>

        <p>
          ETNT est un bureau d’études spécialisée dans le domaine d'ingénieries télécoms de la fibre optique FTTH
        </p>

        <ul className={'social'}>
          <li className={'social__el social__el--fb'}>
            <a href="#">Facebook</a>
          </li>
          <li className={'social__el social__el--in'}>
            <a href="#">Linkedin</a>
          </li>
        </ul>
      </div>
      <small>
        ETNT | © {new Date().getFullYear()} Tous droits réservés
      </small>
    </footer>
  )
}

export default Footer