import React from "react"
import Logo from "../images/logo.svg"

import { Link, useStaticQuery, graphql } from "gatsby"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
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
    <li className={'nav__el'} key={`${index}-link.name`}>
      <Link to={link.link}>
        {link.name}
      </Link>
    </li>
  ))

  return (
    <nav className={'nav'}>
         <img src={Logo} alt="Etnt" />
      <ul>
        {menuLinks}
      </ul>
    </nav>
  )
}

export default Nav
