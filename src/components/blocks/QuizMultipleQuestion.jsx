import { useEffect, useState } from "react"

export default function QuizMultipleQuestion({ correctAnswersList, variants, question }) {
    const [userAnswer, setUserAnswer] = useState([])
    const [result, setResult] = useState(null)




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
            <h3>{question}</h3>
            {
                variants.map(answer => (
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
