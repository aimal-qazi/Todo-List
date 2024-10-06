import './CSS/todo-item.css'

const TodoItem = ({todo, index, deleteFn, editFn}) => {
  return (
    <>
        <li>
            <p>{todo}</p>
            <div>
                <button onClick={() => deleteFn(index)}>Delete</button>
                <button onClick={() => editFn(index, todo)}>Edit</button>
            </div> 
        </li>
    </>
  )
}

export default TodoItem