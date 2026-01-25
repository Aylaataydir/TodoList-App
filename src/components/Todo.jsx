

const Todo = ({ todo, todos, setTodos}) => {

    const { name, id, completed } = todo


    const deleteTodo = (id) => {

        setTodos(todos.filter(todo => todo.id !== id))

    }

    const completedToggle = (id) => {

        setTodos(todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed} : todo ))

    }


    return (
        <li 
        className={completed ? "todo-li completed" : "todo-li"}>
            <p className="todo-text">{name}</p>
            <div className="icon-container">
                <i 
                 onClick={() => deleteTodo(id)}
                 className="fa-solid fa-trash"></i>
                <i
                 onClick={() => completedToggle(id)}
                 className="fa-solid fa-check"></i>
            </div>
        </li>

    )
}

export default Todo