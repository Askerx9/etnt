import React from 'react'
import ScrollToRef from "../scroll/ScrollToRef";
// Assets
import Logo from "../../images/logo.svg"
import {graphql, useStaticQuery} from "gatsby";


const Footer = () => {

  const data = useStaticQuery(graphql`
    query siteQueryAndSiteQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const menuLinks = data.site.siteMetadata.menuLinks.map((link, index) => (
      <li key={`${index}-link.name`}>
        <a href={link.link} onClick={(e) => ScrollToRef(e, link.link)}>
          {link.name}
        </a>
      </li>
  ))

  return (
    <footer>
      <div className={'container'}>
        <button className={'footer__return-to-top'} onClick={(e) => ScrollToRef(e,'header')}>return</button>
        <img className={'footer__logo'} src={Logo} alt="Etnt" />

        <ul className={'footer__nav'}>
          { menuLinks }
        </ul>

        <p>
          ETNT est un bureau d’études spécialisée dans le domaine d'ingénieries télécoms de la fibre optique FTTH
        </p>

        <ul className={'social'}>
          <li className={'social__el social__el--in'}>
            <a href="https://www.linkedin.com/company/etnt/" target={"_BLANK"}>Linkedin</a>
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