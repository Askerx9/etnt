import React from 'react'
// Assets
import techniciens from '../../images/digits/techniciens.svg'
import House from '../../images/digits/house.svg'
import Partners from '../../images/digits/partners.svg'
import Studies from '../../images/digits/studies.svg'
import experience from '../../images/digits/experience.svg'

const Digit = () => {

    const data = [
        {icon: techniciens, digit:"+ 80", text: "techniciens télécoms<br>(terrain et bureau d’étude)" },
        {icon: House, digit:"+ 650 000", text: "Logements raccordés" },
        {icon: Partners, digit:12, text: "partenaires commerciaux" },
        {icon: Studies, digit:"+ 18 000", text: "études FTTH confiées" },
        {icon: experience, digit:8, text: "ans d’expériences" },
    ]

    const digits = data.map((el, index)=> {
        return (
            <li className="digit__el" key={index}>
                <img className={'digit__img'}  src={el.icon} alt="drawers"/>
                <p dangerouslySetInnerHTML={{__html: el.digit}} className={'digit__number'}></p>
                <p dangerouslySetInnerHTML={{__html: el.text}}></p>
            </li>
        )
    })

    return (
        <section className="digit" id={"digit"}>
            <h2>Nos chiffres</h2>
            <ul>
                {digits}
            </ul>
        </section>
    )
}

export default Digit