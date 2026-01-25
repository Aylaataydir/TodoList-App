import { useState } from "react"



const Input = ({todos, setTodos}) => {

    const [inputValue, setInputValue] = useState("")
    

    const submitHandle = (e) => {

        e.preventDefault()

        if (inputValue.trim()) {
            const todo = {
                id: new Date().getTime(),
                name: inputValue,
                completed: false
            }

            const newTodos = [...todos, todo]
            setTodos(newTodos)
            setInputValue("")

        }

    }


    return (
        <form
            onSubmit={submitHandle}
            className="header-container">
            <h1>TO DO LIST</h1>
            <div className="input-section">
                <input
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    type="text" className="add-input" spellCheck="none" placeholder="Please enter a new todo" />
                <button className="add-btn">ADD</button>
            </div>
        </form>
    )
}

export default Input