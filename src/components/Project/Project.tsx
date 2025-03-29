import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
// import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#016fb9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
            </header>
            <div className="body">
              <h3>WCP Financial Spreading</h3>
              <p> I was responsible for building and developing the User experience side of UI functionalities for the WCP Financial Spreading micro-frontend with rich AG Grid interfaces, 
                <br/><br/><strong>Tech Stack:</strong> Used cutting edge latest technology stack such as HTML5, CSS3, React 18, React Hooks, RTK state management, Typescript, ES6, Node NPM, React Vite, CSS Vanilla Extract, React Storybook, RTL, Vitest unit test execution, Figma Design Tokens 
                <br/><br/><strong>Design:</strong> Figma 
                <br/><br/>Reusability, Accessibility, Extensibility are the key successful outcome </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#016fb9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
            </header>
            <div className="body">
              <h3>Web UI Reusable Core Components </h3>
              <p> I was responsible for building reusable UI react Component library,
                <br/><br/><strong>Tech Stack:</strong> Used cutting edge latest technology stack such as HTML5, CSS3, React 18, React Hooks, Typescript, ES6, Storybook, Node NPM, React Vite, CSS Vanilla Extract, React Storybook, RTL, Vitest unit test execution, Figma Design Tokens 
                <br/><br/><strong>Design:</strong> Figma 
                <br/><br/>Reusability, Accessibility, Extensibility are the key successful outcome </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#016fb9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Way2Go Travel Application</h3>
              <p> Way2go is a multi-tenant application which can be used by multiple organizations to offer travel &amp; expense management to their employees and guests. It has separate TMC dashboard which can be used by travel management department to book the travel. 
                <br/><br/><strong>Tech Stack:</strong> HTML5, CSS3, Bootstrap, React Redux, React Hooks, JavaScript/jQuery, Node NPM, Grunt, Gulp, Jasmine with RTL unit test execution. 
                <br/><br/><strong>Design:</strong> Figma 
                <br/><br/>Better UX Design Flows, Reduced pain points and simplified journey, Feature Toggling are the key successful outcome  </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#016fb9" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </header>
            <div className="body">
              <h3>KODO, Banker Desktop, PLBD, Sherlock - Home Loan Calculator, FATCA, BML </h3>
              <p> I was responsible for leading technically and developing the Banker Experience side of UI functionalities with responsive SPA. 
                <br/><br/><strong>Tech Stack:</strong> HTML5, CSS3, Bootstrap, AngularJS, React Redux, React Hooks, SASS, MIDDLEMAN, RUBY Gems, JavaScript/jQuery, Node NPM, Grunt, Gulp, Jasmine unit test. 
                <br/><br/><strong>Design:</strong> Adobe XD, Sketch & Invision, Photoshop 
                <br/><br/>eKYC Flows, Exploring Banker Experience, UXD, Angular to React Migration are the key successful outcome </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#016fb9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://www.anz.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>POLA, SOLA, OOA, SBOLA - Online Applications</h3>
              <p>I was responsible for leading tecnically and developing the client side UI functionalities
              with responsive SPA.
              <br/><br/><strong>Tech Stack:</strong> - HTML 5, CSS 3, Bootstrap, AngularJS, SASS, Javascript/jQuery 
              <br/><br/>Online applications for Customers with better user experience are the key successful outcome </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#016fb9" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.target.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Everest</h3>
              <p>I was responsible for leading technically and developing the entire UI in a HTML 5 & CSS 3
              RWD with Landscape & Portrait compatability.
              <br/><br/><strong>Tech Stack:</strong> - HTML 5, CSS 3, Bootstrap, AngularJS, SASS, Javascript/jQuery 
              <br/><br/>Responsive web application for retail customers with better user experience are the key successful outcome </p>
            </div>
          </div>
        </ScrollAnimation> */}
      </div>
    </Container>
  );
}