export default function CreateQuizDirectQuestion({ question, editQuestion }) {
    return (
        <div>
            <div>
                <label>
                    <p>Введите текст вопроса</p>
                    <input className="border border-gray-500 px-2 py-1 my-2" value={question.question} onInput={(e) => editQuestion(question.id, e.target.value, 'question')} type="text" placeholder="Текст вопроса" />
                </label>
                <label>
                    <p>Введите правильный ответ</p>
                    <input className="border border-gray-500 px-2 py-1 my-2" value={question.correctAnswer} onInput={(e) => editQuestion(question.id, e.target.value, 'correctAnswer')} type="text" placeholder="Правильный ответ" />
                </label>
            </div>
        </div>
    )
}
