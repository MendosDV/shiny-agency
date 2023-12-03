import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LightLogo from '../../assets/light-logo.png'
import DarkLogo from '../../assets/dark-logo.png'
import { StyledLink } from '../../utils/style/Atoms'
import { useTheme } from '../../utils/hooks'

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
  const { theme } = useTheme()

  return (
    <Nav>
      <Link to="/">
        <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo } alt="logo-shiny"/>
      </Link>
      <div>
        <StyledLink $theme={theme} to="/">Accueil</StyledLink>
        <StyledLink $theme={theme} to="/survey/1" $isFullLink>Faire le test</StyledLink>
        <StyledLink $theme={theme} to="/freelances">Freelances</StyledLink>
      </div>
    </Nav>
  )
}
