import { useEffect, useState } from "react"

export default function QuizSingleAnswer() {
    const correntAnswer = 'Бобылев'

    const [userAnswer, setUserAnswer] = useState('')
    const [result, setResult] = useState(null)

    useEffect(() => {
        if (userAnswer == correntAnswer)
            setResult('Верно!')
        else
            setResult("Неверно!")

    }, [userAnswer])

    return (
        <div>
            <h3>Лучший строитель в IThub</h3>
            <div>
                <label>
                    <input type="radio" name="radio" onChange={() => setUserAnswer('Зражевский')} />
                    Зражевский
                </label>
                <label>
                    <input type="radio" name="radio" onChange={() => setUserAnswer('Ионов')} />
                    Ионов
                </label>
                <label>
                    <input type="radio" name="radio" onChange={() => setUserAnswer('Феталиев')} />
                    Феталиев
                </label>
                <label>
                    <input type="radio" name="radio" onChange={() => setUserAnswer('Бобылев')} />
                    Бобылев
                </label>
            </div>

            <p>{result}</p>

        </div>
    )
}
