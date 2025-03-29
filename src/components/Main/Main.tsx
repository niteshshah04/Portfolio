import Particles from "react-tsparticles"
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import jqueryIcon from "../../assets/jquery-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import viteIcon from "../../assets/vite-icon.svg";
import es6Icon from "../../assets/es6-icon.svg";
import reduxtoolkitIcon from "../../assets/reduxtoolkit-icon.svg";
import angularIcon from "../../assets/angular-icon.svg";
import storybookIcon from "../../assets/storybook-icon.svg";
import mswIcon from "../../assets/msw-icon.svg";
import lessIcon from "../../assets/less-icon.svg";
import cssvanillaextractIcon from "../../assets/cssvanillaextract-icon.svg";
import webpackIcon from "../../assets/webpack-icon.svg";
import postmanIcon from "../../assets/postman-icon.svg";
import rtlIcon from "../../assets/rtl-icon.png";
import vitestIcon from "../../assets/vitest-icon.svg";
import jestIcon from "../../assets/jest-icon.svg";
import visualstudioIcon from "../../assets/visualstudio-icon.svg";
import figmaIcon from "../../assets/figma-icon.svg";
import sketchIcon from "../../assets/sketch-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
import xdIcon from "../../assets/xd-icon.svg";
import axureIcon from "../../assets/axure-icon.png";
import photoshopIcon from "../../assets/photoshop-icon.svg";
// import eslintIcon from "../../assets/eslint-icon.svg";
export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          "fullScreen": {
            "enable": true,
            "zIndex": 1
          },
          "detectRetina": true,
          "fpsLimit": 60,
          "interactivity": {
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": false,
                  "force": 60,
                  "smooth": 10
                }
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 2,
              },
              "connect": {
                "distance": 80,
                "lineLinked": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 400,
                "lineLinked": {
                  "opacity": 1
                }
              },
              "push": {
                "quantity": 2
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "lineLinked": {
              "blink": false,
              "color": "#000",
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "attract": {
                "enable": false,
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "bounce": false,
              "direction": "none",
              "enable": true,
              "outMode": "out",
              "random": false,
              "speed": 2,
              "straight": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800
              },
              "limit": 20,
              "value": 15,
            },
            "opacity": {
              "animation": {
                "enable": true,
                "minimumValue": 0.2,
                "speed": 1,
                "sync": false
              },
              "random": true,
              "value": 1
            },
            "rotate": {
              "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
              },
              "direction": "random",
              "random": true,
              "value": 0
            },
            "shape": {
              "character": {
                "fill": false,
                "font": "Verdana",
                "style": "",
                "value": "*",
                "weight": "400"
              },
              "image": [
                {
                  "src": boostrapIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": cssIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": htmlIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": jsIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": jqueryIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": nodeIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": reactIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": typescriptIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": viteIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": es6Icon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": reduxtoolkitIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": angularIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": storybookIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": mswIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": sassIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": lessIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": cssvanillaextractIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": webpackIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": postmanIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": rtlIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": vitestIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": jestIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": visualstudioIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": figmaIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": sketchIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": gitIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": xdIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": axureIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": photoshopIcon,
                  "width": 20,
                  "height": 20
                }
              ],
              "polygon": {
                "sides": 5
              },
              "stroke": {
                "color": "#000000",
                "width": 0
              },
              "type": "image"
            },
            "size": {
              "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
              },
              "random": false,
              "value": 16
            }
          },
          "polygon": {
            "draw": {
              "enable": false,
              "lineColor": "#ffffff",
              "lineWidth": 0.5
            },
            "move": {
              "radius": 10
            },
            "scale": 1,
            "url": ""
          },
          "background": {
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          }
        }}
      />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}