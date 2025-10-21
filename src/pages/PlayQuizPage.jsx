import { useParams } from "react-router"
import QuizDirectQuestion from "../components/blocks/QuizDirectQuestion"
import QuizSingleAnswer from "../components/blocks/QuizSingleAnswer"
import QuizMultipleQuestion from "../components/blocks/QuizMultipleQuestion"

export default function PlayQuizPage() {

    const { id } = useParams()

    const quizes = JSON.parse(localStorage.getItem('quizes'))

    const [currentQuiz] = quizes.filter(quiz => quiz.id == id)

    console.log(currentQuiz)
    return (
        <div>
            <h1>{currentQuiz.title}</h1>


            <div>
                {
                    currentQuiz.questions.map(question => {
                        switch (question.type) {
                            case 'direct':
                                return <QuizDirectQuestion
                                    question={question.question}
                                    correctAnswer={question.correctAnswer}
                                />
                            case 'signle':
                                return <QuizSingleAnswer
                                    question={question.question}
                                    correctAnswer={question.correctAnswer}
                                    variants={question.options}
                                />
                            case 'multiple':
                                return <QuizMultipleQuestion
                                    correctAnswersList={question.correctAnswer}
                                    question={question.question}
                                    variants={question.options}
                                />
                        }
                    })
                }
            </div>

        </div>
    )
}
