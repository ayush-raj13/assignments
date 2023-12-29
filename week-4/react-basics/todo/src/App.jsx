import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todoToAdd) => {
    const updatedTodos = [todoToAdd, ...todos];
    setTodos(updatedTodos);
  };

  const changeTodoById = (id, newTitle, newDescription) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle, description: newDescription };
      }
  
      return todo;
    });
  
    setTodos(updatedTodos);
  };

  const removeTodo = (todoToRemove) => {
    const updatedTodos = todos.filter((todo) => {
      return todo !== todoToRemove;
    });
  
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoForm handleAddTodo={addTodo} />
      <TodoList todoList={todos} handleRemoveTodo={removeTodo} handleUpdateTodo={changeTodoById} />
    </div>
  )
}

export default App
