import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import GmailIcon from '../../assets/gmail-icon.svg'
import instagramIcon from '../../assets/instagram.svg'
import twitterIcon from '../../assets/twitter.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://niteshshah04.github.io/Portfolio/" className="logo" style={{fontSize: '2rem'}}>
        <span>nitesh</span>
        <span>shah04.github.io/Portfolio</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/nitesh-shah-9b413a98/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/niteshshah04"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=+917415880717&text=Hello+NiteshShah"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="mailto:shah.nitesh04@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GmailIcon} alt="gmail" />
        </a>
        <a
          href="https://www.instagram.com/niteshshah04"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a
          href="https://x.com/imNiteshShah"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitterIcon} alt="Twitter" />
        </a>
      </div>
    </Container>
  )
}
