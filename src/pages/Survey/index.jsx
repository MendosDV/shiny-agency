import { useParams } from "react-router-dom"

export default function Survey() {
  const { questionNumber } = useParams()

  return (
    <div>
      <h1>Page de sondage 📝</h1>
      <h2>Question {questionNumber}</h2>
    </div>
  )
}
