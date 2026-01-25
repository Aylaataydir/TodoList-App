import { useState } from "react"
import DeleteAllBtn from "./DeleteAllBtn"
import Filter from "./Filter"
import Search from "./Search"



const Counters = ({todos, setTodos, setSearchedItems, searchValue, setSearchValue, filter, setFilter}) => {


    const completed = todos.filter(todo => todo.completed === true)


    return (
        <div className="counters-container">
            <Search todos={todos} setTodos={setTodos} setSearchedItems={setSearchedItems} searchValue={searchValue} setSearchValue={setSearchValue}   />
            <div className="buttons">
                <DeleteAllBtn setTodos={setTodos} />
                <Filter setTodos={setTodos} setSearchedItems={setSearchedItems} filter={filter} setFilter={setFilter} />
            </div>

            <div className="counters">
                <p>TOTAL:  <span className="total-span">{todos.length}</span></p>
                <p>COMPLETED: <span className="completed-span">{completed.length}</span></p>
            </div>

        </div>
    )
}

export default Counters