import { useEffect, useState } from "react"

export default function QuizDirectQuestion({ question, correntAnswer }) {


    const [userAnswer, setUserAnswer] = useState('')
    const [result, setResult] = useState(null)

    useEffect(() => {
        userAnswer == correntAnswer ? setResult('Верно!') : setResult('Неверно!')
    }, [userAnswer])

    return (
        <div>
            <h3>{question}</h3>
            <input value={userAnswer} onInput={(e) => setUserAnswer(e.target.value)} type="text" placeholder="Ваш ответ" />
            <p>{result}</p>
        </div>
    )
}
