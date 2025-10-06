import { useEffect, useState } from "react"

export default function CreateQuizMultipleAnswer({ question, editQuestion }) {


    function editOption(id, index, value) {
        const optionsOld = question.options
        optionsOld[index] = value
        editQuestion(id, optionsOld, 'options')
    }

    const [checkedAnswers, setCheckedAnswers] = useState([])


    function checkCorrectAnswer(answer) {
        if (checkedAnswers.includes(answer)) {
            setCheckedAnswers(
                checkedAnswers.filter((item) => item !== answer)
            )
        } else {
            setCheckedAnswers(
                [
                    ...checkedAnswers,
                    answer
                ]
            )
        }


    }

    useEffect(() => {
        editQuestion(question.id, checkedAnswers, 'correctAnswer')
    }, [checkedAnswers])


    return (

        <div>
            <label>
                <p>Введите текст вопроса</p>
                <input className="border border-gray-500 px-2 py-1 my-2" value={question.question} onInput={(e) => editQuestion(question.id, e.target.value, 'question')} type="text" placeholder="Текст вопроса" />
            </label>

            <div>
                {
                    question.options.map((option, index) => (
                        <div className="flex gap-x-4">
                            <input className="border border-gray-500 px-2 py-1 my-2" type="text" value={option} onInput={(e) => editOption(question.id, index, e.target.value)} placeholder={`Вариант ${index + 1}`} />
                            <label className="flex gap-x-3 items-center">
                                <input type="checkbox" onChange={() => checkCorrectAnswer(option, question.id)} />
                                <p>Правильный ответ</p>
                            </label>
                        </div>

                    ))
                }
            </div>
            <button
                onClick={() => editQuestion(question.id, [...question.options, ''], 'options')}
                className="cursor-pointer px-2 py-1 border border-amber-500 rounded-lg"
            >Добавить вариант</button>

            <div>
                <h4>Правильные ответы</h4>
                <ul className="list-disc">
                    {
                        typeof question.correctAnswer === 'object' &&
                        question.correctAnswer.map(answer => (
                            <li>{answer}</li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}
