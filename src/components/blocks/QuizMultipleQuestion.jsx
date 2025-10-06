import { useEffect, useState } from "react"

export default function QuizMultipleQuestion() {
    const [userAnswer, setUserAnswer] = useState([])
    const [result, setResult] = useState(null)
    const correctAnswersList = [
        'Что-то нажал и все исчезло',
        "Собака погрызла ноутбук",
    ]

    const answersList = [
        'Что-то нажал и все исчезло',
        "Кошка рожает",
        "Собака погрызла ноутбук",
        "Не успел сварить кашу"
    ]

    function checkAnswer(answer) {
        if (userAnswer.includes(answer)) {
            setUserAnswer(
                userAnswer.filter((item) => item !== answer)
            )
        } else {
            setUserAnswer(
                [
                    ...userAnswer,
                    answer
                ]
            )
        }
    }


    useEffect(() => {

        if (userAnswer.length === correctAnswersList.length &&
            correctAnswersList.every(item => userAnswer.includes(item))) {
            setResult('Верно!')
        } else {
            setResult('Неверно!')
        }

    }, [userAnswer])

    return (
        <div className="flex flex-col gap-y-4">
            <h3>Почему я не принес итоговый проект?</h3>
            {
                answersList.map(answer => (
                    <label>
                        <input type="checkbox" defaultValue={answer} onChange={() => checkAnswer(answer)} />
                        {answer}
                    </label>
                ))
            }

            <p>{result}</p>
        </div>
    )
}
