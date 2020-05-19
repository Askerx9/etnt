import React from 'react'
import Particles from 'react-particles-js';

// Assets
import particlesJSON from './particles.json'

const ParticlesBackground = () => {
    return (
        <Particles className={"particles particles--right"} params={particlesJSON} />
    )
}

export default ParticlesBackground