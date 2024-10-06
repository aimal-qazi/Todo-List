import './CSS/todo-list.css'
import TodoItem from './Todo-item'

const TodoList = () => {
  return (
    <>
        <div className="container">
            <div className="box">
              <div className="title">
                <h1>Todo List</h1>
              </div>
              <div className="form">
                <input type="text" placeholder='Add Todo'/>
                <button>Add</button>
              </div>
              <ul>
                <TodoItem />
              </ul>
            </div>
        </div>
    </>
  )
}

export default TodoList