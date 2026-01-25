import Todo from "./Todo"



const TodoContainer = ({ todos, setTodos, searchedItems, searchValue, filter }) => {

    console.log(todos)
    console.log(searchedItems)

    const isSearching = searchValue.trim().length > 0
    const baseList = isSearching > 0 ? searchedItems : todos

    const listToDisplay = baseList.filter(todo => {

        if(filter === "Completed") return todo.completed === true;
        if(filter === "Active") return todo.completed === false;
        return true

    })

    return (
        <div className="container-todo">
            <ul className="todo-ul">

                {
                    listToDisplay.length > 0
                        ? (listToDisplay.map(todo => (
                            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                        ))
                        )
                        : (<p className="first-text">
                        {isSearching > 0 ? "No results found" : "Add your first todo!" }
                        </p>)
                }

            </ul>

        </div>
    )
}

export default TodoContainer