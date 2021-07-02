import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../../config/particle.config";
const ParticlesBackground = () => {
  return (
    <div style={{ height: "0px" }}>
      <Particles params={ParticleConfig}></Particles>
    </div>
  );
};

export default ParticlesBackground;
