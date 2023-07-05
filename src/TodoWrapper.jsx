import React from 'react'
import TodoFrom from './TodoFrom'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Todo from './Todo';
import EditTodoFrom from './EditTodoFrom';
import { useEffect } from 'react';

const getItemsformTodo=()=>{
    let list=localStorage.getItem('list')
    if (list){
        return JSON.parse(localStorage.getItem('list'))
    }
    else{
        return []
    }
}
const TodoWrapper = () => {

    const [todos,setTodos]=useState(getItemsformTodo())

    const addTodo=(todo)=>{

        setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isediting:false}])

        console.log(todos)

    }

    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(todos))
    },[todos])


    const deleteTodo=(id)=>{
        setTodos(todos.filter(todo=>todo.id!==id))
    }
   
    const editTodo=(id)=>{

        setTodos(todos.map(todo=>todo.id===id? {...todo,isediting:!todo.isediting}:todo))

    }


    const editTask=(task,id)=>{
        setTodos(todos.map(todo=>todo.id===id? {...todo,task,isediting:!todo.isediting}:todo))
    }

  return (
    <>

    <TodoFrom addTodo={addTodo}/>

    {todos.map((todo,index)=>(todo.isediting?<EditTodoFrom editTask={editTask} task={todo}/>:<Todo task={todo} key={index} deleteTodo={deleteTodo} editTodo={editTodo}/>))}

    
    
    </>
  )
}

export default TodoWrapper