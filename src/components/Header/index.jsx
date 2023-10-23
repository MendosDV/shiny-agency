import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LightLogo from '../../assets/light-logo.png'
import DarkLogo from '../../assets/dark-logo.png'
import { StyledLink } from '../../utils/style/Atoms'
import { useState } from 'react';

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
  const [darkMode, setDarkMode] = useState(false)

  const changeColor = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true)
    document.querySelector('body').style.backgroundColor = darkMode ? '' : 'rgb(46, 46, 65)'
  }

  return (
    <Nav>
      <Link to="/">
        <HomeLogo src={darkMode ? LightLogo : DarkLogo} alt="logo-shiny"/>
      </Link>
      <p onClick={() => changeColor()}>Dark Mode</p>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
        <StyledLink to="/freelances">Freelances</StyledLink>
      </div>
    </Nav>
  )
}
