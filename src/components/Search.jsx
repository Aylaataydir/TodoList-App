

const Search = ({ todos, setSearchedItems, searchValue, setSearchValue }) => {

    
    const getSearchedItems = (value) => {

        if (value.trim()) {

            setSearchedItems(todos.filter(todo => todo.name.toLowerCase().includes(value.trim().toLowerCase())))

        } else {
            setSearchedItems([])
        }

    }



    return (
        <div className="search-container">
            <div className="search-input">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                        getSearchedItems(e.target.value)
                    }}
                    value={searchValue}
                    type="text" className="search" spellCheck="false" placeholder="search..." />
            </div>
        </div>
    )
}

export default Search