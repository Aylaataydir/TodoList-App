import DeleteAllBtn from "./DeleteAllBtn"
import Filter from "./Filter"
import Search from "./Search"



const Counters = ({todos, setTodos}) => {
    return (
        <div className="counters-container">
            <Search todos={todos} setTodos={setTodos} />
            <div className="buttons">
                <DeleteAllBtn setTodos={setTodos} />
                <Filter setTodos={setTodos} />
            </div>

            <div className="counters">
                <p>TOTAL: <span className="total-span">0</span></p>
                <p>COMPLETED: <span className="completed-span">0</span></p>
            </div>

        </div>
    )
}

export default Counters