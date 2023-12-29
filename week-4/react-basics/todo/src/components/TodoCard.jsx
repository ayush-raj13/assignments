import { useState } from "react"

function TodoCard({ todo, handleUpdateTodo, handleRemoveTodo }) {

  const [showUpdateTodoForm, setShowUpdateTodoForm] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState(todo.title)
  const [updatedDescription, setUpdatedDescription] = useState(todo.description)

  const updateTodoForm = 
  <div>
    <label>New Title</label>
    <input type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)}></input><br />
    <label>New Description</label>
    <input type="text" value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)}></input><br />
    <button onClick={() => {handleUpdateTodo(todo.id, updatedTitle, updatedDescription); setShowUpdateTodoForm((prev) => !prev)}}>Update todo</button>
  </div>

  return (
    <div>
      <div>
        <div>{todo.title}</div>
        <div>{todo.description}</div>
        <button onClick={() => handleRemoveTodo(todo)}>Delete todo</button>
        {!showUpdateTodoForm && <button onClick={() => setShowUpdateTodoForm((prev) => !prev)}>Update todo</button>}
        {showUpdateTodoForm && updateTodoForm}
      </div>
    </div>
  )
}

export default TodoCard