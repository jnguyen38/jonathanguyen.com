import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function CustomParticles(props) {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            className={"particles"}
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {value: props.theme === "light" ? "#ffffff" : "#333333"},
                    opacity: 1
                },
                fpsLimit: 30,
                interactivity: {
                    events: {
                        resize: false,
                    },
                },
                particles: {
                    color: {value: "#bbbbbb"},
                    links: {
                        color: "#bbbbbb",
                        distance: 220,
                        enable: true,
                        opacity: 1,
                        width: 1,
                    },
                    collisions: {enable: false},
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {default: "bounce"},
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 40,
                    },
                    opacity: {value: 1},
                    shape: {type: "square"},
                    size: {value: { min: 1, max: 5 }},
                },
                detectRetina: true,
            }}
        />
    )
}