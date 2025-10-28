import { Button, Input } from "antd"

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
                <Input
                    style={{ width: 250 }}
                    value={question.question}
                    onInput={(e) => editQuestion(question.id, e.target.value, 'question')}
                    placeholder="Текст вопроса"
                />
            </label>

            <div>
                {
                    question.options.map((option, index) => (
                        <div className="flex items-center gap-x-3 my-5">
                            <Input
                                style={{ width: 250 }}
                                value={option}
                                onInput={(e) => editOption(question.id, index, e.target.value)}
                                placeholder={`Вариант ${index + 1}`}
                            />
                            <Button
                                color="primary"
                                variant="outlined"
                                onClick={() => editQuestion(question.id, option, 'correctAnswer')}
                            >
                                Отметить правильный ответ
                            </Button>

                        </div>

                    ))
                }
            </div>

            <Button
                color="purple"
                variant="solid"
                onClick={() => editQuestion(question.id, [...question.options, ''], 'options')}>
                Добавить вариант
            </Button>


            <div>
                <h4>Правильный ответ</h4>
                <input type="text" value={question.correctAnswer} className="border border-green-500 py-1 px-2 rounded-xl mt-3" />
            </div>
        </div>
    )
}
