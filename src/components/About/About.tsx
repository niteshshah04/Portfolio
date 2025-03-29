import { Container } from "./styles";
// import RaghuTelkar from "../../assets/telkar.png";
// import NiteshShah from "../../assets/Nitesh_Shah.png";
import NiteshShah from "../../assets/niteshshahblackbackgrond.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
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
import sassIcon from "../../assets/sass-icon.svg";
import lessIcon from "../../assets/less-icon.svg";
import cssvanillaextractIcon from "../../assets/cssvanillaextract-icon.svg";
import webpackIcon from "../../assets/webpack-icon.svg";
import postmanIcon from "../../assets/postman-icon.svg";
import rtlIcon from "../../assets/rtl-icon.png";
import vitestIcon from "../../assets/vitest-icon.svg";
import jestIcon from "../../assets/jest-icon.svg";
import visualstudioIcon from "../../assets/visualstudio-icon.svg";
import figmaIcon from "../../assets/figma-icon.svg";
// import sketchIcon from "../../assets/sketch-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
// import xdIcon from "../../assets/xd-icon.svg";
// import axureIcon from "../../assets/axure-icon.png";
// import photoshopIcon from "../../assets/photoshop-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.20 * 1000}>
          <img src={NiteshShah} alt="Nitesh Shah"/>
        </ScrollAnimation>
      </div>
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInRight" delay={0.1 * 1000}>
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Nitesh Shah,<br/><br/>Experienced UI Front-End Engineer with over 10 yrs of corporate expertise in UI web design and development for responsive web applications. Skilled in HTML5, CSS3, Bootstrap, JavaScript, ES6, Angular, React RTK & Redux, Vite, Node, NPM, and Java Micro-services. Experienced in design tools such as Figma. Consistently adheres to RWD and W3C standards, ensuring compliance with accessibility standards. Achievements include leading front-end engineering projects. Seeking a UI Engineer position at a company that values innovation and user experience design. 
          </p>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p><strong>Lead UI Engineer</strong> -  Proven track record of leading successful front-end engineering projects and teams. </p>
        </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p><strong>Expertise in UX Design</strong> -  Highly skilled in creating elegant user interfaces with a focus on user experience design. </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p><strong>Technical Proficiency</strong> -  Proficient in a wide range of front-end technologies, design tools, and development processes. </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p><strong>Agile Methodologies</strong> -  Extensive experience working in Agile environments and leading teams in Agile transformation. </p>
        </ScrollAnimation> */}
        <ScrollAnimation animateIn="fadeInRight" delay={0.3 * 1000}>
          <h3>Here are my UI Frontend Engineering Skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {/* Frontend Frameworks */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={angularIcon} alt="Angular" />
            </ScrollAnimation>
          </div>

          {/* State Management */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={reduxtoolkitIcon} alt="Redux Toolkit" />
            </ScrollAnimation>
          </div>

          {/* Testing */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={rtlIcon} alt="RTL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={vitestIcon} alt="Vitest" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={jestIcon} alt="Jest" />
            </ScrollAnimation>
          </div>

          {/* Core Languages */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={es6Icon} alt="ES6" />
            </ScrollAnimation>
          </div>

          {/* Version Control */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={gitIcon} alt="Git" />
            </ScrollAnimation>
          </div>

          {/* Backend */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>

          {/* Frontend Basics */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          {/* CSS Frameworks & Preprocessors */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={sassIcon} alt="SASS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={lessIcon} alt="LESS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssvanillaextractIcon} alt="CSS Vanilla Extract" />
            </ScrollAnimation>
          </div>

          {/* JavaScript Libraries */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jqueryIcon} alt="jQuery" />
            </ScrollAnimation>
          </div>

          {/* Build Tools */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={viteIcon} alt="Vite" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={webpackIcon} alt="Webpack" />
            </ScrollAnimation>
          </div>

          {/* Development Tools */}
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={eslintIcon} alt="ESLint" />
            </ScrollAnimation>
          </div> */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={storybookIcon} alt="Storybook" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={mswIcon} alt="MSW" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={postmanIcon} alt="Postman" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={visualstudioIcon} alt="Visual Studio" />
            </ScrollAnimation>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInRight" delay={0.3 * 1000}>
          <h3>Here are my UX Design Skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {/* UX Design Tools */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={figmaIcon} alt="Figma" />
            </ScrollAnimation>
          </div>
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={sketchIcon} alt="Sketch" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={xdIcon} alt="XD" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={axureIcon} alt="Axure" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={photoshopIcon} alt="Photoshop" />
            </ScrollAnimation>
          </div> */}
        </div>
      </div>
    </Container>
  )
}
