import React from 'react'

const Todo = ({task,deleteTodo,editTodo}) => {
  return (
    <>

    {task.task}

    <button onClick={()=>editTodo(task.id)}>edit</button>
    <button onClick={()=>deleteTodo(task.id)}>delete</button>

    <br />
    
    </>
  )
}

export default Todo