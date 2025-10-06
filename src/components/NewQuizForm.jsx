import { useState } from "react"
import CreateQuizDirectQuestion from "./blocks/CreateQuizDirectQuestion"
import CreateQuizSignleAnswer from "./blocks/CreateQuizSignleAnswer"
import CreateQuizMultipleAnswer from "./blocks/CreateQuizMultipleAnswer"

export default function NewQuizForm() {


    const [questionList, setQuestionList] = useState([
        { id: Date.now(), type: 'direct', options: [''], question: '', correctAnswer: '' },
    ])

    const [quizName, setQuizName] = useState('')

    function addQuestion() {
        setQuestionList(
            [
                ...questionList,
                { id: Date.now(), type: 'direct', options: [''], question: '', correctAnswer: '' }
            ]
        )
    }

    function editQuestion(id, value, field) {

        setQuestionList(
            questionList.map(item => {
                if (item.id == id) {
                    item = {
                        ...item,
                        [field]: value
                    }
                    return item
                } else {
                    return item
                }
            })
        )
    }


    function saveQuiz() {
        if (localStorage.getItem('quizes')) {
            const quizes = JSON.parse(localStorage.getItem('quizes'))
            quizes.push(questionList)
            localStorage.setItem('quizes', JSON.stringify(quizes))
        } else {
            localStorage.setItem('quizes', JSON.stringify([questionList]))
        }
    }


    return (
        <div>

            <input className="" value={quizName} onInput={(e) => setQuizName(e.target.value)} type="text" placeholder="Название квиза" />

            <div>

                {
                    questionList.map(question => (
                        <div>
                            <select className="bg-gray-500 text-white px-2 py-1 mb-4" onChange={(e) => editQuestion(question.id, e.target.value, 'type')}>
                                <option value="direct">Прямой ответ</option>
                                <option value="single">Единичный выбор</option>
                                <option value="multiple">Множественный выбор</option>
                            </select>
                            {
                                question.type === 'direct' &&
                                <CreateQuizDirectQuestion question={question} editQuestion={editQuestion} />
                            }
                            {
                                question.type === 'single' &&
                                <CreateQuizSignleAnswer question={question} editQuestion={editQuestion} />
                            }
                            {
                                question.type === 'multiple' &&
                                <CreateQuizMultipleAnswer question={question} editQuestion={editQuestion} />
                            }
                        </div>

                    ))
                }

                <button className="px-2 py-1 bg-amber-500 text-white rounded-lg" onClick={() => addQuestion()}>Добавить вопрос</button>

                <div className="text-center mt-5">
                    <button className="px-2 py-1 bg-green-500 text-white rounded-lg" onClick={() => saveQuiz()}>Сохранить Квиз!</button>
                </div>
            </div>

        </div>
    )
}
