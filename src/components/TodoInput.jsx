import React from 'react'


export default function TodoInput(props) {
    const {handleAddTodo, todoValue, setTodoValue} = props

    
    function handleOnChange(e) {
        setTodoValue(e.target.value)
    }

    return (
        <header>
            <input placeholder='Enter todo...' value={todoValue} onChange={(e) => handleOnChange(e)}/>
            <button onClick={() => {
                handleAddTodo(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
} 