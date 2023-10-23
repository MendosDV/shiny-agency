import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Oups from '../../assets/404.svg'

const ErrorWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  margin: 30px;
`

const Illustration = styled.img`
  max-width: 800px;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`
const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`

export default function Error () {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={Oups} alt='error'/>
      <ErrorSubtitle>Il semblerait qu'il y ait un problème</ErrorSubtitle>
    </ErrorWrapper>
  )
}
