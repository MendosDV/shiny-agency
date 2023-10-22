import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';

export default function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const nextQuestion = questionNumberInt + 1
  const lastQuestion = questionNumberInt === 1 ? 1 : questionNumberInt - 1

  return (
    <div>
      <h1>Page de sondage 📝</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${lastQuestion}`}>Précédent</Link>
      {questionNumberInt === 10 ? (
        <Link to={`/results`}>Resultat</Link>
      ) : (
        <Link to={`/survey/${nextQuestion}`}>Suivant</Link>
      )}
    </div>
  )
}
