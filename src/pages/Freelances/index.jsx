import Card from '../../components/Card'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Atoms'
import { useEffect, useState } from 'react'

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
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default function Freelances () {
  const [error, setError] = useState(false)
  const [freelanceProfiles, setFreelanceProfiles] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    async function fetchFreelances() {
      setDataLoading(true)
      try {
        const response = await fetch("http://localhost:8000/freelances")
        const { freelancersList } = await response.json()
        setFreelanceProfiles(freelancersList)
      } catch(err) {
        console.log("=== error ===", err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchFreelances()
  }, [])

  if (error) {
    return <span>Il y a un problème 🙊</span>
  }

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelanceProfiles.map((profile, id) => (
            <Card
              key={`${profile.name}-${id}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}
