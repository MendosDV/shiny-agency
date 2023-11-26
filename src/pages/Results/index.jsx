import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useFetch, useTheme } from '../../utils/hooks'
import { StyledLink, Loader } from '../../utils/style/Atoms'

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`

const DescriptionWrapper = styled.div`
  padding: 60px;
`

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

// Récupère les numéros de question et les réponses pour crééer le params qui suivra le /result?
export function formatQueryParams(answers) {
  // Récupère les clés de l'object
  const answerNumbers = Object.keys(answers)
  console.log(answerNumbers)
  // Utilise reduce pour construire la chaîne de requête
  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    // Regarde s'il s'agit du premier paramètre
    const isFirstParam = index === 0

    // S'il s'agit du premier parametre, ouvre des quotes '' qui se ferme à la fin de notre chaine
    const separator = isFirstParam ? '' : '&'

    // Concaténation de la chaine
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

export function formatJobList(title, listLength, index) {
  if (index === listLength - 1) {
      return title
  }
  return `${title},`
}

function Results() {
  const { theme } = useTheme()
  const { answers } = useContext(SurveyContext)
  const fetchParams = formatQueryParams(answers)
  console.log('=== fetchParams ===', fetchParams)

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`
  )

  console.log('==== data ====', data)

  if (error) {
    return <span>Il y a un problème</span>
  }

  const resultsData = data?.resultsData
  console.log('==== resultsData ====', resultsData)

  return isLoading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultsTitle theme={theme}>
        Les compétences dont vous avez besoin :
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
            >
              {formatJobList(result.title, resultsData.length, index)}
            </JobTitle>
          ))}
      </ResultsTitle>
      <StyledLink $isFullLink to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle theme={theme}>{result.title}</JobTitle>
              <p>{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  )
}

export default Results
