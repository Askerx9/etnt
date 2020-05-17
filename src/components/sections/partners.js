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
        {name:"Circet" ,img: circet ,link: "https://www.circet.fr/"},
        {name:"Constructel" ,img: Constructel ,link:"https://constructel.net/fr/home"},
        {name:"Spie" ,img: Spie ,link:"https://www.spie.be/fr"},
        {name:"Axians" ,img: Axians ,link:"https://www.axians.be/en/"},
        {name:"Engie" ,img: Engie ,link:"https://www.engie.be"},
        {name:"Scopelec" ,img: Scopelec ,link:"https://www.groupe-scopelec.com/"},
        {name:"Eiffage" ,img: Eiffage ,link:"https://www.eiffage.com/"},
    ]

    const partnersElements = partners.map((element, index) => {
        return (
            <a href={element.link} key={index} target = "_BLANK" rel="noopener noreferrer">
                <img
                    src={element.img}
                    alt={element.name}
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