import styled from 'styled-components'

import { ProjectList } from '../data'
import ProjectCart from './project-card.component'

const ProjectSection = () => {
  return (
    <ProjectContainer>
      <Container>
        <h2 className="project-sec">PROJECTS.</h2>
        <div className="projects">
          {ProjectList.map((project) => (
            <ProjectCart {...project} />
          ))}
        </div>
      </Container>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div``

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  .project-sec {
    font-size: 30px;
    letter-spacing: 6px;
    margin: 30px 0;
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
`

export default ProjectSection
