import React, {Fragment, useState} from "react"
import Logo from "../images/logo.svg"
import { useStaticQuery, graphql } from "gatsby"
import Burger from '@animated-burgers/burger-slip'
import '@animated-burgers/burger-slip/dist/styles.css'
import ScrollToRef from "./scroll/ScrollToRef";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
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
      <a href={link.link} onClick={(e) => {
          setIsOpen(!isOpen)
          ScrollToRef(e, link.link)
      }}>
        {link.name}
      </a>
    </li>
  ))

  return (
      <Fragment>

          <nav className={'nav'}>
              <img src={Logo} alt="Etnt" />
              <Burger onClick={() => setIsOpen(!isOpen)} isOpen={ isOpen } Component="button" type="button" />
              <ul className={isOpen ? 'open' : ''}>
                  {menuLinks}
              </ul>
          </nav>
      </Fragment>
  )
}

export default Nav
