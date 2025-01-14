import React, { useState } from 'react'
export const TodoForm = ({addTodo}) => {
    const[value,setValue]=useState("")

    const handleSubmit=e=>{
        e.preventDefault();
        addTodo(value);
        setValue("");
        // console.log(value);
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' required className='todo-input' value={value} placeholder='Enter to do' onChange={(e)=>setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Add task</button>     
    </form>
  )  
}

// export default TodoForm;
