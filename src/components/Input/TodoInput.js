import React, {useState } from 'react'
import Card from '../UI/Card'
import classes from './TodoInput.module.css'

const TodoInput = (props) => {
   const [todoInput, setTodoInput] = useState('');

   const todoChangeHandler= (event) => {
    setTodoInput(event.target.value)
   }

   const addTodoHandler = (event) => {
    event.preventDefault()
    if(todoInput.trim().length === 0){
        return;
    }
    props.addTodo(todoInput)
    setTodoInput('')
   }

  return (
    <Card className={classes.container}>
      <h1>Todo app</h1>
      {/* <p>{todoInput}</p> */}
      <form className={classes['form-control']} onSubmit={addTodoHandler}>
        <input 
        type="text" 
        placeholder='Enter your task here' 
        id="todo" 
        value={todoInput}
        onChange={todoChangeHandler}
        />
        <button type="submit">Add task</button>
      </form>
    </Card>
  )
}

export default TodoInput