import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../img/ashraf-yello (2).png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeroSection = () => {
  const { text } = useTypewriter({
    words: [
      "Web Developer",
      "Full-stack Developer",
      "Front-end Developer",
      "Graphic Designer",
    ],
    loop:50,
  });

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

  const particleParams = {
    fpsLimit: 60,
    particles: {
      color: {
        value: "#6b605a"
      },
      number: {
        density: {
          enable: true,
          value_area: 1000
        },
        value: 100
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false
        }
      },
      shape: {
        type: "circle"
      },
      size: {
        random: false,
        value: 5
      }
    },
    retina_detect: true
  };

  return (
    <div className="hero min-h-full bg-accent  lg:min-h-screen md:px-12 lg:px-24">
      <Particles className="particles" params={particleParams} />
      {/* <Particles
      className="h-full"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 800,
                size: 80,
                duration: 2,
                opacity: 0.3,
                speed: 3
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.8,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      /> */}

      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={HeroImg}
          className="w-full px-2 md:px-0 md:max-w-lg lg:max-w-lg xl:max-w-2xl rounded-lg shadow-2xl"
        />
        <div>
          <p className="text-secondary">Hi, My Name is</p>
          <h1 className="text-3xl tracking-wider text-white sm:text-5xl font-bold">
            Ashraf Ali
          </h1>
          <h2 className="text-2xl text-secondary sm:text-4xl font-extrabold pt-4">
            I'm a <span className="font-bold">{text}</span>
            <Cursor />
          </h2>
          <p className="py-6 text-white">
            I'm a creative web developer and I'm very passionate and dedicated
            to my work. I can provide clean code and pixel perfect design. I
            also make website more and more interactive with web animations.
          </p>
          <div className="space-x-4">
            <a
              href="https://drive.google.com/file/d/1miR7bZt_BtArdVg4Hc_EhAhqb4kjey3p/view?usp=sharing"
              target="_blank"
              className="px-8 btn btn-outline text-primary hover:bg-gradient-to-r from-primary via-info to-secondary"
            >
              Resume
            </a>
            <Link
              to="/contact"
              className="px-8 btn btn-outline text-secondary hover:bg-gradient-to-r from-primary via-info to-secondary"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
