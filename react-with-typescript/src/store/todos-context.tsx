import React, { useState } from "react";
import Todo from "../models/todo";

// Describe shape of todos Context
type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
  }

  type Props = {
    children: React.ReactNode
  }


// Angle brackets to define types
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<Props> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);
  
      // return new array to ensure latest state
      setTodos((prevToDos) => {
        return prevToDos.concat(newTodo);
      });
    };
  
    // Remove a todo item on click
    const removeTodoHandler = (todoId: string) =>{
      setTodos((prevToDos) => {
        return prevToDos.filter(todo => todo.id !== todoId)
      })
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }


  return (
  <TodosContext.Provider value={contextValue}>
    {props.children}
    </TodosContext.Provider>
    )
};

export default TodosContextProvider;