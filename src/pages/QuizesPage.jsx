import QuizDirectQuestion from "../components/blocks/QuizDirectQuestion"

export default function QuizesPage() {

    const quizes = JSON.parse(localStorage.getItem('quizes')) || []


    return (
        <div>
            {
                quizes.map((quiz, index) => (
                    <div>
                        <h2>КВИЗ № {index + 1}</h2>
                        {
                            quiz.map(question => (
                                <div>
                                    <QuizDirectQuestion correctAnswer={question.correctAnswer} question={question.question} />

                                </div>
                            ))
                        }
                    </div>

                ))
            }
        </div>
    )
}
