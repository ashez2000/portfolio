import styled from 'styled-components'

import { ReactComponent as FbIcon } from '../icons/footer-icons/fb.svg'
import { ReactComponent as InstaIcon } from '../icons/footer-icons/insta.svg'
import { ReactComponent as GtIcon } from '../icons/footer-icons/git.svg'

import { FooterLinks } from '../data'

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <div className="footer-section">
          <FooterText>
            <p className="footer-text">
              Designed and developed by Aswin Gangadharan.
              <br /> Built with react and ❤️. Hosted on netlyfy.
            </p>
          </FooterText>
          <SocialLinks>
            <a
              href={FooterLinks.github}
              target="_blank"
              rel="noreferrer"
              className="social-links"
            >
              <FbIcon />
            </a>
            <a
              href={FooterLinks.github}
              target="_blank"
              rel="noreferrer"
              className="social-links"
            >
              <InstaIcon />
            </a>
            <a
              href={FooterLinks.github}
              target="_blank"
              rel="noreferrer"
              className="social-links"
            >
              <GtIcon />
            </a>
          </SocialLinks>
        </div>
      </Container>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`
const Container = styled.div`
  max-width: 1100px;
  margin: auto;

  .footer-section {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }
`
const FooterText = styled.div`
  .footer-text {
    @media only screen and (max-width: 600px) {
      font-size: 14px;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  .social-links {
    margin-left: 30px;

    @media only screen and (max-width: 600px) {
      margin-left: 0;
      margin-right: 30px;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: 30px;
  }
`
