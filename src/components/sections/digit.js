import React from 'react'


// Assets
import Drawers from '../../images/digits/drawers.svg'
import House from '../../images/digits/house.svg'
import Partners from '../../images/digits/partners.svg'
import Studies from '../../images/digits/studies.svg'

const Digit = () => {

    return (
        <section className="digit" id={"digit"}>
            <h2>Nos chiffres</h2>
            <ul>
                <li className="digit__el">
                    <img className={'digit__img'}  src={Drawers} alt="drawers"/>
                    <p className={'digit__number'}>19</p>
                    <p>Dessinateurs</p>
                </li>
                <li className="digit__el">
                    <img className={'digit__img'}  src={House} alt="house"/>
                    <p className={'digit__number'}>+200 000</p>
                    <p>Logements cablés</p>
                </li>
                <li className="digit__el">
                    <img className={'digit__img'}  src={Partners} alt="partners"/>
                    <p className={'digit__number'}>9</p>
                    <p>Partenaires</p>
                </li>
                <li className="digit__el">
                    <img className={'digit__img'} src={Studies} alt="studies"/>
                    <p className={'digit__number'}>+11 000</p>
                    <p>Études</p>
                </li>
            </ul>
        </section>
    )
}

export default Digit