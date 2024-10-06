import { useRef, useState } from 'react'
import './CSS/todo-list.css'
import TodoItem from './Todo-item'

const TodoList = () => {
  const inputField = useRef(null)
  const [todos, setTodo] = useState([])
  const [editIndex, setEditIndex] = useState(-1)

  const addTodo = () => {
    if(inputField.current.value.trim() === '') return

    if(editIndex == -1) {
      setTodo([...todos, inputField.current.value])
    } else {
      setTodo(
        todos.map((todo, index) => index === editIndex ? inputField.current.value : todo)
      )
      setEditIndex(-1)
    }

    inputField.current.value = ''
  }

  const deleteTodo = (index) => {
    setTodo(todos.filter((_, i) => i !== index))
  }

  const editTodo = (index, todo) => {
    setEditIndex(index)
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
                <button onClick={addTodo}>{editIndex === -1 ? 'Add' : 'Edit'}</button>
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