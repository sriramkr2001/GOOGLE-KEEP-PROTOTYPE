
import React from 'react';
import Particles from 'react-particles-js'
import { ConfigParticles } from './ConfigParticles';

export function ParticleBackground(){
return(
<Particles params={ConfigParticles}></Particles>
);
}