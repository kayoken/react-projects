import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function Mutations() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      {
        //this works only because the nextId is global and outside of Mutations
        id: nextId++,
        title: title,
        done: false,
      },
      ...todos,
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return {
            nextTodo,
          };
        }
        return todo;
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== todoId;
      })
    );
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
