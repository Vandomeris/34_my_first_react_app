import { useState } from "react"
import TodoItem from "./TodoItem"

export default function TodoList() {

    const [newTodo, setNewTodo] = useState('')


    const [todos, setTodos] = useState([
        { id: 1, text: 'Покормить кота!', completed: false },
        { id: 2, text: 'Купить молоко', completed: true },
        { id: 3, text: 'Забрать зарплату', completed: false },
    ])

    function addTodo(event) {
        event.preventDefault()
        setTodos(
            [
                ...todos,
                { id: todos.length + 1, text: newTodo, completed: false }
            ]
        )
        setNewTodo('')

    }

    function toggleTodo(id) {
        console.log(id)
    }

    return (
        <div>

            <div>
                <label>
                    Все задания
                    <input type="radio" value="All" name="todoFilter" />
                </label>
                <label>
                    Выполненные
                    <input type="radio" value="Completed" name="todoFilter" />
                </label>
                <label>
                    В процессе
                    <input type="radio" value="Ongoing" name="todoFilter" />
                </label>

            </div>


            <div>
                {
                    todos.map((todo) => (
                        <TodoItem
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            toggleTodo={toggleTodo}
                        />
                    ))
                }
            </div>

            <form onSubmit={(event) => addTodo(event)}>
                <input type="text" value={newTodo} onInput={(event) => setNewTodo(event.target.value)} placeholder="Новое дело" />
                <button>Создать</button>
            </form>


        </div>
    )
}
