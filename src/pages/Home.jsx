import { useEffect, useState } from "react"
import Counters from "../components/Counters"
import Input from "../components/Input"
import TodoContainer from "../components/TodoContainer"


const Home = () => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("TODOS")) ?? [])
    



    useEffect(() => {
        
        localStorage.setItem("TODOS", JSON.stringify(todos))

    }, [todos])


    return (
        <div className="home-container">
            <Input todos={todos} setTodos={setTodos} />
            <TodoContainer todos={todos} setTodos={setTodos} />
            <Counters todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default Home