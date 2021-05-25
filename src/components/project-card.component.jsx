import styled from 'styled-components'
import { ColorTags } from '../data'

const ProjectCard = ({ title, description }) => {
  return (
    <ProjectCardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Tags>
        <Chip>
          <p>node</p>
        </Chip>
        <Chip>
          <p>raect</p>
        </Chip>
        <Chip>
          <p>firebase</p>
        </Chip>
      </Tags>
      <div className='project-links'>
        <a
          href='asdas'
          target='_blank'
          rel='norefernce'
          className='project-a-link'
        >
          code
        </a>
        <a
          href='dasd'
          target='_blank'
          rel='norefernce'
          className='project-a-link'
        >
          live
        </a>
      </div>
    </ProjectCardContainer>
  )
}

const ProjectCardContainer = styled.div`
  margin-bottom: 30px;
  .project-links {
    margin-top: 15px;
    .project-a-link {
      font-size: 12px;
      margin-right: 10px;
      padding: 5px 8px;
      border-radius: 4px;
      background-color: whitesmoke;
    }
  }
`
const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
`
const Description = styled.p`
  margin-bottom: 20px;
`

const Tags = styled.div`
  display: flex;
`

const Chip = styled.span`
  font-size: 12px;
  margin-right: 10px;
  padding: 5px 8px;
  border-radius: 4px;
  background-color: ${ColorTags.node.color};
`

export default ProjectCard
