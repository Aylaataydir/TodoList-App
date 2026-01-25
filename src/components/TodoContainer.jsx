import Todo from "./Todo"



const TodoContainer = ({ todos, setTodos }) => {

    console.log(todos)

    return (
        <div className="container-todo">
            <ul className="todo-ul">
                {
                    todos.length > 0
                        ? (todos.map(todo => (
                            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                        ))
                        )
                        : (<p className="first-text">Add your first todo!</p>)
                }

            </ul>

        </div>
    )
}

export default TodoContainer