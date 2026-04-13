import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // slim is lighter than full

const ParticlesBackground = ({ theme }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesConfig = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse", // repulse on hover for interactive feel
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2, // fewer particles on click so it doesn't get cluttered
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: theme === 'light' ? "#6366f1" : "#00f0ff", // accent colors based on theme
      },
      links: {
        color: theme === 'light' ? "#0ea5e9" : "#7000ff", // connecting lines color
        distance: 120,
        enable: true,
        opacity: 0.6,
        width: 1.5,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 0.5, // slow molecular movement (neurons)
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 200, // incredibly dense network
      },
      opacity: {
        value: 0.7,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={particlesConfig}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -10, // stay behind everything
        }}
      />
    );
  }

  return null;
};

export default ParticlesBackground;
