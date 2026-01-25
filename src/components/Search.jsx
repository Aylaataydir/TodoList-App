import { useState } from "react"



const Search = ({ todos, setTodos }) => {

    const [searchValue, setSearchValue] = useState("")
    const [searchedItems, setSearchedItems] = useState([])

    const getSearchedItems = () => {

        if (searchValue) {

            setSearchedItems(todos.filter(todo => todo.name.toLowerCase().includes(searchValue.trim().toLowerCase())))

        }

        console.log(searchValue)
        console.log(searchedItems)

    }



    return (
        <div className="search-container">
            <div className="search-input">
                <i
                    onClick={getSearchedItems}
                    className="fa-solid fa-magnifying-glass search-icon"></i>
                <input
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                    type="text" className="search" spellCheck="false" placeholder="search..." />
            </div>
        </div>
    )
}

export default Search