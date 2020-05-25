import React, {useRef, useState} from 'react'
import HorizontalTimeline from 'react-horizontal-timeline';

// Assets

const Timeline = () => {



    const values = [
        {date: "2012" ,title: "Création de l’entreprise off-shore au Maroc et démarrage d’activité FTTH Orange", text: 'Déploiement de la fibre optique en Zone Très Dense (ZTD) dans les immeubles sur un nombre important de villes situées en région parisienne à travers des études FTTH D2 Orange. THD 75 – 93 – 94 – 78 - 92'},
        {date: "2013" ,title: "Elargissement du périmètre de déploiement en Zone Moyennement Dense (ZMD)", text: 'Déploiement de la fibre optique FTTH Orange dans les immeubles sur la région Nord-Est de la France.'},
        {date: "2014" ,title: "Déploiement de la fibre optique en zone pavillonnaire", text: 'Déploiement de la fibre optique FTTH Orange dans les maisons situées en zone pavillonnaire.'},
        {date: "2015" ,title: "Démarrage déploiement FTTH FREE et SFR", text: 'Déploiement de la fibre optique FTTH FREE sur le département Haut-Seine 92. <br> Déploiement de la fibre optique FTTH SFR sur la région PACA.'},
        {date: "2016" ,title: "Lancement sur le projet calcul de charges des appuis FT & ENEDIS", text: 'Réalisation d’études CAPFT & COMAC pour le déploiement de la fibre optique en aérien sur les appuis FT et ENEDIS.'},
        {date: "2017" ,title: "Ouverture de 3 nouveaux bureaux d’études", text: '3 bureaux d’études ouvert dans les villes de Tanger, Asilah et Témara. <br> Effectif Global: 21 personnes'},
        {date: "2018" ,title: "Déploiement de la fibre optique sur l’ensemble du territoire français", text: 'Réalisation d’études FTTH sur le plan national'},
        {date: "2019" ,title: "Nouveaux actionnaires et augmentation des effectifs à 83 personnes", text: 'Intégration de nouveaux investisseurs et acquisition de plus grands locaux pour répondre à la demande croissante de nos partenaires.'},
        {date: "2020" ,title: "Concrétisation du projet ETNT « CLÉ EN MAIN » & « SMART CITIES »", text: 'ETNT propose actuellement à ses clients des solutions « clé en main » allant du piquetage terrain en passant par les études réalisées dans nos bureaux jusqu’au dépôt des dossiers d’ouvrages exécutés DOE auprès du client. <br> Diversification de notre secteur d’activité : mobile &amp; smart cities'},
    ]
    const dates = values.map(el => el.date)

    const [dataIndex, setdataIndex] = useState(values.length - 1);
    const [previous, setPrevious] = useState(0);
    const timelineRef = useRef()

    return (
        <section className={"container timeline"} ref={timelineRef}>

            <div>
                <div style={{ width: '100%', height: '100px', margin: '0 auto' }}>
                    <HorizontalTimeline
                        index={dataIndex}
                        indexClick={(index) => {
                            setdataIndex(index)
                            setPrevious(dataIndex)
                        }}
                        getLabel={date => date.slice(0, 4)}
                        values={ dates }
                        labelWidth={100}
                        linePadding={150}
                        styles={{ background: '#ffffff', foreground: '#51c9eb', outline: '#dfdfdf' }}
                        maxEventPadding={30}
                        minEventPadding={30}
                    />
                </div>

                <div className='text-center'>
                    <h3>{values[dataIndex].title}</h3>
                    <p dangerouslySetInnerHTML={{__html: values[dataIndex].text}}></p>
                </div>

            </div>



        </section>
    )
}

export default Timeline