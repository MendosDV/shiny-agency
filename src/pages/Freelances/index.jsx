import Card from '../../components/Card'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { NoUnderlineLink } from '../../utils/style/Atoms'
import { Loader } from '../../utils/style/Atoms'
import { useFetch, useTheme } from '../../utils/hooks'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => (theme === 'light' ? 'black': 'white')};
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => (theme === 'light' ? colors.secondary :  'white')};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default function Freelances () {
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch("http://localhost:8000/freelances")
  const { freelancersList } = data

  if (error) {
    return <span>Il y a un problème 🙊</span>
  }

  return (
    <div>
      <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} data-testid="loader"/>
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList && freelancersList.map((profile, id) => (
            <NoUnderlineLink key={`${profile.name}-${id}`} to={`/profile/${profile.id}`}>
              <Card
                label={profile.job}
                title={profile.name}
                picture={profile.picture}
              />
            </NoUnderlineLink>
          ))}
        </CardsContainer>
      )}
    </div>
  )
}
