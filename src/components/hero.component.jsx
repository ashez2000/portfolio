import styled from 'styled-components'
import { ReactComponent as DevIcon } from '../assets/dev.svg'

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <div>
          <MainTitle>
            Hello, I'm
            <br /> Aswin Gangadharan .
          </MainTitle>
          <SubTitle>
            <p>
              I'm a passionate Full Stack Software Developer having an
              experience of building Web with JavaScript, Reactjs, Nodejs and
              some other cool libraries and frameworks.
            </p>
          </SubTitle>
        </div>
        <DevIcon className="illus" width={900} />
      </Container>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background-color: #e8edfc;
  @media only screen and (max-width: 600px) {
    .illus {
      display: none;
    }
  }
`

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
`

const MainTitle = styled.h1`
  margin-bottom: 30px;
  padding: 15px 0;
  color: #0f4c75;
  font-size: 60px;
  font-weight: 700;

  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
`

const SubTitle = styled.div`
  padding: 20px 0;
  max-width: 70%;
  p {
    color: #1b262c;
    font-size: 20px;

    @media only screen and (max-width: 600px) {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 600px) {
    max-width: 90%;
  }
`
