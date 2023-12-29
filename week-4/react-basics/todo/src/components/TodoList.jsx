import TodoCard from "./TodoCard"

function TodoList({ todoList, handleUpdateTodo, handleRemoveTodo }) {

  const renderedTodoComponent = todoList.map((todo) => {
    return <TodoCard todo={todo} handleUpdateTodo={handleUpdateTodo} handleRemoveTodo={handleRemoveTodo} key={todo.id} />
  })

  return (
    <div>
      {renderedTodoComponent}
    </div>
  )
}

export default TodoList