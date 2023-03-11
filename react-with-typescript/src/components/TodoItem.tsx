import React from "react"
import Todo from "../models/todo"
import classes from './TodoItem.module.css'

// Props is an object with an items key of type array of Todos
// Using generics using React component in order to get types of children etc.
// Type React Functional Component
const TodoItem: React.FC<{text: string; onRemoveTodo: () => void}> = (props) => {

    return (
        <li onClick={props.onRemoveTodo} className={classes.item}>
            {props.text}
        </li>
    )
}

export default TodoItem