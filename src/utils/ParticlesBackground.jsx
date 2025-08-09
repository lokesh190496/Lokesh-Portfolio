import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = ({ id }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#0b2c3d", // Deep blue like screenshot
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { quantity: 4 }, // Number of particles on click
          grab: { distance: 150 },
        },
      },
      particles: {
        color: { value: "#FFFFFF" },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.15, // Subtle lines
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 1.5, // Slightly faster for a lively background
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 250, // Increased particle count for fuller background
        },
        opacity: { value: 0.9 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2 } }, // Smaller so more fit without clutter
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id={id} init={particlesLoaded} options={options} />;
};

export default ParticlesBackground;