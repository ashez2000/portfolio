import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../icons/logo.svg'

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Link to='/'>
          <LogoContainer />
        </Link>
        <NavContainer>
          <Link className='nav-links' to='/about'>
            about
          </Link>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/ashez2000'
            className='nav-links'
          >
            github
          </a>
        </NavContainer>
      </Container>
    </HeaderContainer>
  )
}

const Container = styled.div`
  max-width: 1100px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderContainer = styled.div`
  height: 70px;
  background-color: #ffffff;
`

const LogoContainer = styled(Logo)``

const NavContainer = styled.nav`
  .nav-links {
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    margin-left: 15px;
  }
`

export default Header
