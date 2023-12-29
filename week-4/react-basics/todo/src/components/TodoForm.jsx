import { useState } from "react"

function TodoForm({ handleAddTodo }) {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function uniqueID() {
    return Math.floor(Math.random() * Math.random() * Date.now())
    }

  function handleTitleChange(event) {
    setTitle(event.target.value)
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value)
  }

  return (
    <div>
      <label>Title</label>
      <input type="text" value={title} onChange={handleTitleChange} />
      <br />
      <label>Description</label>
      <input type="text" value={description} onChange={handleDescriptionChange} />
      <br />
      <button onClick={() => handleAddTodo({id: uniqueID(), title, description})}>Add Todo</button>
    </div>
  )
}

export default TodoForm