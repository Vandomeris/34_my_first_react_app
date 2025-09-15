export default function TodoItem({ id, text, completed, toggleTodo }) {
    return (
        <div>
            <label >
                <input checked={completed} onChange={() => toggleTodo(id)} type="checkbox" />
                {text}
            </label>

        </div>
    )
}
