export default function CreateQuizDirectQuestion({ question, editQuestion }) {
    return (
        <div>
            <div>
                <label>
                    <p>Введите текст вопроса</p>
                    <input value={question.question} onInput={(e) => editQuestion(question.id, e.target.value, 'question')} type="text" placeholder="Текст вопроса" />
                </label>
                <label>
                    <p>Введите правильный ответ</p>
                    <input value={question.correctAnswer} onInput={(e) => editQuestion(question.id, e.target.value, 'correctAnswer')} type="text" placeholder="Правильный ответ" />
                </label>
            </div>
        </div>
    )
}
