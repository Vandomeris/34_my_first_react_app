import { NavLink } from "react-router"

export default function QuizesPage() {

    const quizes = JSON.parse(localStorage.getItem('quizes')) || []
    console.log(quizes[0])

    return (
        <div className="flex flex-col justify-center items-center gap-5 mt-5">
            {
                quizes.map((quiz) => (
                    <NavLink className="text-3xl hover:text-orange-500" to={`/quizes/${quiz.id}`}>{quiz.title}</NavLink>
                ))
            }
        </div>
    )
}
