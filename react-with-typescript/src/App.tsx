import NewToDo from "./components/NewToDo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

// import { useState } from "react";
// import Todo from "./models/todo";

function App() {

  // ***********************
  // Commented out when using context to store data
  // ***********************


  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);

  //   // return new array to ensure latest state
  //   setTodos((prevToDos) => {
  //     return prevToDos.concat(newTodo);
  //   });
  // };

  // // Remove a todo item on click
  // const removeTodoHandler = (todoId: string) =>{
  //   setTodos((prevToDos) => {
  //     return prevToDos.filter(todo => todo.id !== todoId)
  //   })
  // }

  // return (
  //   <div>
  //     <NewToDo onAddTodo={addTodoHandler} />
  //     <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
      
  //   </div>
  // );

  return (
    <TodosContextProvider>
      <NewToDo  />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
