import { useEffect, useState } from "react"

export default function QuizDirectQuestion({ question, correctAnswer }) {


    const [userAnswer, setUserAnswer] = useState('')
    const [result, setResult] = useState(null)

    useEffect(() => {
        userAnswer == correctAnswer ? setResult('Верно!') : setResult('Неверно!')
    }, [userAnswer])

    return (
        <div>
            <h3>{question}</h3>
            <input value={userAnswer} onInput={(e) => setUserAnswer(e.target.value)} type="text" placeholder="Ваш ответ" />
            <p>{result}</p>
        </div>
    )
}
