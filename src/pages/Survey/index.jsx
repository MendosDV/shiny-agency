import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

export default function Survey() {

  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const nextQuestion = questionNumberInt + 1
  const lastQuestion = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchSurvey() {
      setDataLoading(true)
      try {
        const response = await fetch("http://localhost:8000/survey")
        const { surveyData } = await response.json()
        setSurveyData(surveyData)
      } catch (err) {
        console.log('=== error ===', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }

    fetchSurvey()
  }, [])

  if (error) {
    return <span>Il y a un problème 🙊</span>
  }
  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
      )}
      <LinkWrapper>
        <Link to={`/survey/${lastQuestion}`}>Précédent</Link>
        {surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestion}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>

  )
}
