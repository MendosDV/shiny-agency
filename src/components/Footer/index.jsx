import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks'
import EmailInput from '../EmailInput/'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10em;
    padding-top: 60px;
`

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : 'white')};
`

function Footer() {
  const { toggleTheme, theme } = useTheme()

  return (
      <FooterContainer>
          <NightModeButton onClick={() => toggleTheme()} theme={theme}>
            Changer de mode : {theme === 'light' ? '🌞' : '🌙' }
          </NightModeButton>
          <EmailInput theme={theme}/>
      </FooterContainer>
  )
}

export default Footer
