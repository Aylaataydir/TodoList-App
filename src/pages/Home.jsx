import { useEffect, useState } from "react"
import Counters from "../components/Counters"
import Input from "../components/Input"
import TodoContainer from "../components/TodoContainer"


const Home = () => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("TODOS")) ?? [])
    const [searchedItems, setSearchedItems] = useState([])
    const [filter, setFilter] = useState("All");
    const [searchValue, setSearchValue] = useState("")
    
console.log(searchedItems)


    useEffect(() => {
        
        localStorage.setItem("TODOS", JSON.stringify(todos))

    }, [todos])


    return (
        <div className="home-container">
            <Input todos={todos} setTodos={setTodos} />
            <TodoContainer todos={todos} setTodos={setTodos} searchedItems={searchedItems} searchValue={searchValue} filter={filter}  />
            <Counters todos={todos} setTodos={setTodos} setSearchedItems={setSearchedItems} searchValue={searchValue} setSearchValue={setSearchValue} filter={filter} setFilter={setFilter} />
        </div>
    )
}

export default Home