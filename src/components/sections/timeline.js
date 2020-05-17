import React, {useEffect, useRef, useState} from 'react'
import HorizontalTimeline from 'react-horizontal-timeline';

// Assets

const Timeline = () => {



    const values = [
        {date: "2012" ,title: "title1", text: 'lorem'},
        {date: "2013" ,title: "title2", text: 'lorem'},
        {date: "2014" ,title: "title3", text: 'lorem'},
        {date: "2015" ,title: "title4", text: 'lorem'},
        {date: "2016" ,title: "Lancement sur le projet calcul de charges des appuis FT & ENEDIS", text: 'Réalisation d’études CAPFT & COMAC pour le déploiement de la fibre optique en aérien sur les appuis FT et ENEDIS.'},
        {date: "2017" ,title: "title6", text: 'lorem'},
        {date: "2018" ,title: "title7", text: 'lorem'},
        {date: "2019" ,title: "title8", text: 'lorem'},
        {date: "2020" ,title: "title9", text: 'lorem'},
    ]
    const dates = values.map(el => el.date)

    const [index, setIndex] = useState(0);
    const [previous, setPrevious] = useState(0);
    const timelineRef = useRef()




    return (
        <section className={"container timeline"} ref={timelineRef}>

            <div>
                <div style={{ width: '100%', height: '100px', margin: '0 auto' }}>
                    <HorizontalTimeline
                        index={index}
                        indexClick={(index) => {
                            setIndex(index)
                            setPrevious(index)
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
                    <h3>{values[index].title}</h3>
                    <p>{values[index].text}</p>
                </div>

            </div>



        </section>
    )
}

export default Timeline