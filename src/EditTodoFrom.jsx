import React from 'react'
import { useState } from 'react'

const EditTodoFrom = ({editTask,task}) => {

    const[value,setValue]=useState('') 

    const handleSubmit=(e)=>{
        e.preventDefault()
        editTask(value,task.id)
        setValue('')
    }
  return (
    <>

    TodoFrom

    <form onSubmit={handleSubmit}>

        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>

        <button type='submit'>update</button>
    </form>
    
    </>
  )
}

export default EditTodoFrom