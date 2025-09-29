import { useState } from "react"
import CreateQuizDirectQuestion from "./blocks/CreateQuizDirectQuestion"

export default function NewQuizForm() {


    const [questionList, setQuestionList] = useState([
        { id: Date.now(), type: 'direct', options: [], question: '', correctAnswer: '' },
    ])

    function addQuestion() {
        setQuestionList(
            [
                ...questionList,
                { id: Date.now(), type: 'direct', options: [], question: '', correctAnswer: '' }
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
                        <CreateQuizDirectQuestion question={question} editQuestion={editQuestion} />
                    ))
                }

                <button onClick={() => addQuestion()}>Добавить вопрос</button>

                <button onClick={() => saveQuiz()}>Сохранить Квиз!</button>
            </div>

        </div>
    )
}
