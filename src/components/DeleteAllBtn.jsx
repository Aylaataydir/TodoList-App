


const DeleteAllBtn = ({setTodos}) => {
  return (
    <div>
        <button
        onClick={() => setTodos([])}
         className="delete-all">DELETE ALL</button>
    </div>
  )
}

export default DeleteAllBtn