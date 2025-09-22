import { useEffect, useState } from "react"
import TodoItem from "./TodoItem"

export default function TodoList() {

    const [newTodo, setNewTodo] = useState('')


    const [todos, setTodos] = useState([
        { id: 1, text: 'Покормить кота!', completed: false },
        { id: 2, text: 'Купить молоко', completed: true },
        { id: 3, text: 'Забрать зарплату', completed: false },
    ])

    const [filteredTodos, setFilteredTodos] = useState([])
    const [currentFilter, setCurrentFilter] = useState('All')

    function doFilter() {
        switch (currentFilter) {
            case 'Done':
                setFilteredTodos(
                    todos.filter(todo => todo.completed === true)
                )
                break;
            case 'Process':
                setFilteredTodos(
                    todos.filter(todo => todo.completed === false)
                )
                break;
            default:
                setFilteredTodos(todos)
        }
    }

    useEffect(() => {
        doFilter()
    }, [currentFilter])

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
        setTodos(
            todos.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed
                }
                return item
            })
        )
    }

    function deleteTodo(id) {

        setTodos(
            todos.filter(item => {
                if (item.id !== id) {
                    return true
                }


            })
        )

    }

    return (
        <div>

            <div>
                <label>
                    Все задания
                    <input type="radio" onChange={() => setCurrentFilter('All')} name="todoFilter" />
                </label>
                <label>
                    Выполненные
                    <input type="radio" onChange={() => setCurrentFilter('Done')} name="todoFilter" />
                </label>
                <label>
                    В процессе
                    <input type="radio" onChange={() => setCurrentFilter('Process')} name="todoFilter" />
                </label>

            </div>


            <div>
                {
                    filteredTodos.map((todo) => (
                        <TodoItem
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
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
