import styled from 'styled-components'

const About = () => {
  return (
    <AboutContainer>
      <Container>
        <div className="about-page">
          <h2 className="about-title">About Me .</h2>
          <p className="para">
            I am a software enthusiast from India. Current I'm doing my
            engneering in Information Technology from GEC Barton Hill.
          </p>
          <p className="para">
            I am an expert in JavaScript, working primarily in React and Node,
            but I have experience working in a wide range of technologies
            including Node & Express, MongoDB, PostgreSQL, GrapgQl, REST API
            design, Docker.
          </p>
          <p className="para">
            Other things I love to do ...
            <ul className="misc-list">
              <li>playing video games with my friends.</li>
              <li>watching anime.</li>
              <li>Singing and playing guitar.</li>
            </ul>
          </p>
        </div>
      </Container>
    </AboutContainer>
  )
}

const AboutContainer = styled.div``
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  .about-page {
    width: 80%;
    .about-title {
      margin-bottom: 30px;
      padding: 15px 0;
      color: #0f4c75;
      font-size: 50px;
      font-weight: 700;

      @media only screen and (max-width: 600px) {
        font-size: 30px;
        margin-bottom: 10px;
      }
    }
    .para {
      font-size: 18px;
      margin-bottom: 80px;
      width: 80%;
      line-height: 1cm;

      .misc-list {
        margin-left: 50px;
        li {
          margin: 10px 0;
        }
      }

      @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin-bottom: 50px;
        width: 90%;
        line-height: 0.7cm;

        .misc-list {
          margin-left: 40px;
          li {
            margin: 5px 0;
          }
        }
      }
    }
  }
`

export default About
