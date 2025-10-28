import { Input } from "antd";

export default function CreateQuizDirectQuestion({ question, editQuestion }) {
    return (
        <div>
            <div>
                <label>
                    <p>Введите текст вопроса</p>
                    <Input
                        style={{ width: 250 }}
                        value={question.question}
                        onInput={(e) => editQuestion(question.id, e.target.value, 'question')}
                        placeholder="Текст вопроса" />
                </label>
                <label>
                    <p>Введите правильный ответ</p>
                    <Input
                        style={{ width: 250 }}
                        value={question.correctAnswer}
                        onInput={(e) => editQuestion(question.id, e.target.value, 'correctAnswer')}
                        placeholder="Правильный ответ"
                    />
                </label>
            </div>
        </div>
    )
}
