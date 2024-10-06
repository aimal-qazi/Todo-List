import { useRef, useState } from 'react'
import './CSS/todo-list.css'
import TodoItem from './Todo-item'

const TodoList = () => {
  const inputField = useRef(null)
  const [todos, setTodo] = useState([])
  let editIndex = -1

  const addTodo = () => {
    if(inputField.current.value == '') return
    if(editIndex == -1) {
      setTodo([...todos, inputField.current.value])
      inputField.current.value = ''
    } else {
      let todosUpdated = [...todos]
      todosUpdated[editIndex] = inputField.current.value
      setTodo(todosUpdated)
      editIndex = -1
      inputField.current.value = ''
    }
  }

  const deleteTodo = (index) => {
    const updatedTodo = [...todos]
    updatedTodo.splice(index, 1)
    setTodo(updatedTodo)
  }

  const editTodo = (index, todo) => {
    editIndex = index
    inputField.current.value = todo 
  }
  
  return (
    <>
        <div className="container">
            <div className="box">
              <div className="title">
                <h1>Todo List</h1>
              </div>
              <div className="form">
                <input ref={inputField} type="text" placeholder='Add Todo'/>
                <button onClick={addTodo}>Add</button>
              </div>
              <ul>
                {todos.length == 0 ? 
                <p>No Todos to Show</p> :
                 todos.map((todo, index) => (
                  <TodoItem todo={todo} key={index} index={index} deleteFn={deleteTodo} editFn={editTodo} />
                ))}
              </ul>
            </div>
        </div>
    </>
  )
}

export default TodoList