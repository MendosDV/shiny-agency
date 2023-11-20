import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LightLogo from '../../assets/light-logo.png'
import DarkLogo from '../../assets/dark-logo.png'
import { StyledLink } from '../../utils/style/Atoms'

const Nav = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HomeLogo = styled.img`
  height: 70px
`

export default function Header () {
  return (
    <Nav>
      <Link to="/">
        <HomeLogo src={DarkLogo} alt="logo-shiny"/>
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
        <StyledLink to="/freelances">Freelances</StyledLink>
      </div>
    </Nav>
  )
}
