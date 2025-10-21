export default function TodoItem({ todo }) {
    return (
        <div className="flex items-center gap-x-5">
            <label className={(completed ? 'striked' : '')}>
                <input checked={completed} onChange={() => toggleTodo(id)} type="checkbox" />
                {text}
            </label>
            <button onClick={() => deleteTodo(id)}>Delete task</button>
        </div>
    )
}
