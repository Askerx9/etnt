import React from 'react'
import ParticlesBackground from "../modules/particlesBackground";


// Assets


const Contact = () => {

    return (
        <section className="contact" id={"contact"}>
          <div className="container">
            <div className={"section_title"}>
              <h2>Contactez-nous</h2>
            </div>

            <ul className="info">
              <li className="info__el">
                <p className="bold">ETNT</p>
                <p>Études Télécoms Nouvelles Technologies</p>
              </li>

              <li className="info__el">
                <p className="bold">TECHNOPARK CENTER</p>
                <p>
                  BOULEVARD MOHAMED V<br/>
                  PAVILLON INTERNATIONAL 504<br/>
                  90000 TANGER - MAROC<br/>
                </p>
              </li>

              <li className="info__el">
                <p><span className="bold">Tél Maroc&nbsp;:</span> <a href="tel:+212652407050">+212 6 52 40 70 50</a></p>
                <p><span className="bold">Tél France&nbsp;:</span> <a href="tel:+33613733410">+33 6 13 73 34 10</a></p>
                <p><span className="bold">Mail&nbsp;:</span> <a href="mailto:cem@etnt-group.com">cem@etnt-group.com</a></p>
              </li>
            </ul>
          </div>
          <ParticlesBackground/>

        </section>
    )
}

export default Contact