export default function CreateQuizSignleAnswer({ question, editQuestion }) {


    function editOption(id, index, value) {
        const optionsOld = question.options
        optionsOld[index] = value
        editQuestion(id, optionsOld, 'options')
    }


    return (

        <div>
            <label>
                <p>Введите текст вопроса</p>
                <input value={question.question} onInput={(e) => editQuestion(question.id, e.target.value, 'question')} type="text" placeholder="Текст вопроса" />
            </label>

            <div>
                {
                    question.options.map((option, index) => (
                        <div>
                            <input type="text" value={option} onInput={(e) => editOption(question.id, index, e.target.value)} placeholder={`Вариант ${index + 1}`} />
                            <button onClick={() => editQuestion(question.id, option, 'correctAnswer')}>Отметить правильный ответ</button>
                        </div>

                    ))
                }
            </div>
            <button
                onClick={() => editQuestion(question.id, [...question.options, ''], 'options')}
                className="border border-amber-500 py-1 px-2 rounded-xl mt-3"
            >Добавить вариант</button>

            <div>
                <h4>Правильный ответ</h4>
                <input type="text" value={question.correctAnswer} className="border border-green-500 py-1 px-2 rounded-xl mt-3" />
            </div>
        </div>
    )
}
