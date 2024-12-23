import React from "react"

export default function TodoCard(props) {
  const { children, handleDeleteTodo, handleUpdateTodo, index } = props
  return (
    <li className="todoItem" onDoubleClick={() => handleUpdateTodo(index)}>
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleUpdateTodo(index)
          }}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index)
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  )
}
