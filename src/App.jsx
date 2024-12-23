import { useState, useEffect } from "react"

import "./App.css"

import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState("")

  function PersistData(updatedTodoList) {
    localStorage.setItem("todos", JSON.stringify({ todos: updatedTodoList }))
  }

  function handleAddTodo(newTodoItem) {
    const updatedTodoList = [...todos, newTodoItem]
    PersistData(updatedTodoList)
    setTodos(updatedTodoList)
  }

  function handleDeleteTodo(index) {
    const updatedTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })

    setTodos(updatedTodoList)
    PersistData(updatedTodoList)
  }

  function handleUpdateTodo(index) {
    setTodoValue(todos[index])
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) return

    let storedTodos = localStorage.getItem("todos")
    if (!storedTodos) return

    storedTodos = JSON.parse(storedTodos).todos
    setTodos(storedTodos)
  }, [])

  return (
    <>
      <TodoInput
        handleAddTodo={handleAddTodo}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
      />
    </>
  )
}

export default App
