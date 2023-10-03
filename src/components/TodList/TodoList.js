import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './TodoList.module.css'

const TodoList = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = (event) => {
        setIsChecked(event.target.checked)
    }
    return (
        <Card className={classes.container}>
            <h1>Your Task</h1>
            <ul>
                {props.todos.map((todo,index)=>{
                    return <li className={classes['todo-list']} key={index}>
                    <input 
                    type="checkbox" 
                    id="completed"
                    value={isChecked}
                    onChange={handleCheck}
                    />
                    <h3 className={`${classes['todo-text']} ${isChecked? classes.active : ''} `}>{todo.title}</h3>
                </li>
                })}
            </ul>
        </Card>
    )
}

export default TodoList