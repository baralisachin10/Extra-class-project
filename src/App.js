import React, { useState } from 'react'
import TodoInput from './components/Input/TodoInput'
import TodoList from './components/TodList/TodoList'
import Card from './components/UI/Card'
import classes from './App.module.css'

const App = () => {
  const [todoList, setTodoList] = useState([])

  const addTodoHandler = (todoTitle) => {
    setTodoList((prevTodo)=>{
      return [...prevTodo,{title: todoTitle}]
    });
  };

  const content = <Card className={classes.container}>
    <h1 className={classes.heading}>Task Not added Yet.</h1>
    <p className={classes.paragraph}>Please add task</p>
  </Card>
  return (
    <React.Fragment>
      <TodoInput addTodo = {addTodoHandler} />
      {
      todoList.length===0 ? content :  <TodoList todos = {todoList}/> 
      }
    </React.Fragment>

  )
}

export default App