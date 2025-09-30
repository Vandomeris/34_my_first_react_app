import { useState } from "react"
import CreateQuizDirectQuestion from "./blocks/CreateQuizDirectQuestion"
import CreateQuizSignleAnswer from "./blocks/CreateQuizSignleAnswer"
import CreateQuizMultipleAnswer from "./blocks/CreateQuizMultipleAnswer"

export default function NewQuizForm() {


    const [questionList, setQuestionList] = useState([
        { id: Date.now(), type: 'direct', options: [''], question: '', correctAnswer: '' },
    ])

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


            <div>

                {
                    questionList.map(question => (
                        <div>
                            <select onChange={(e) => editQuestion(question.id, e.target.value, 'type')}>
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

                <button onClick={() => addQuestion()}>Добавить вопрос</button>

                <button onClick={() => saveQuiz()}>Сохранить Квиз!</button>
            </div>

        </div>
    )
}
