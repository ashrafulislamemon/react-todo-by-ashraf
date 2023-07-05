import React from 'react'
import { useState } from 'react'

const TodoFrom = ({addTodo}) => {

    const[value,setValue]=useState('') 

    const handleSubmit=(e)=>{
        e.preventDefault()
        addTodo(value)
        setValue('')
    }
  return (
    <>

    TodoFrom

    <form onSubmit={handleSubmit}>

        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>

        <button type='submit'>add Task</button>
    </form>
    
    </>
  )
}

export default TodoFrom