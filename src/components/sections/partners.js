import React from 'react'


// Assets
import circet from "../../images/partners/Logo-Circet.png"
import Axians from "../../images/partners/Logo-Axians.png"
import Constructel from "../../images/partners/logo-Constructel.png"
import Eiffage from "../../images/partners/Logo-Eiffage.png"
import Engie from "../../images/partners/Logo-Engie.png"
import Scopelec from "../../images/partners/Logo-Scopelec.png"
import Spie from "../../images/partners/Logo-Spie.png"



const Partners = () => {

    const partners = [
        {img: circet ,link: "https://www.circet.fr/"},
        {img: Constructel ,link:"https://constructel.net/fr/home"},
        {img: Spie ,link:"https://www.spie.be/fr"},
        {img: Axians ,link:"https://www.axians.be/en/"},
        {img: Engie ,link:"https://www.engie.be"},
        {img: Scopelec ,link:"https://www.groupe-scopelec.com/"},
        {img: Eiffage ,link:"https://www.eiffage.com/"},
    ]

    const partnersElements = partners.map((element, index) => {
        return (
            <a href={element.link} target = "_BLANK">
                <img
                    src={element.img}
                    key = {index}
                />
            </a>
        )
    });

    return (
        <section className="partners">
            {partnersElements}
        </section>
    )
}

export default Partners