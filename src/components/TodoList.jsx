import { useState, useEffect } from 'react';
import ToDo from './TodoItem';
import ToDoCount from './TodoCount';
import ToDoForm from './TodoForm';

function ToDoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('localToDos')) {
      const storedList = JSON.parse(localStorage.getItem('localToDos'));
      setTodos(storedList);
    }
  }, []);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    localStorage.setItem('localToDos', JSON.stringify([todo, ...todos]));
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const deleted = [...todos].filter((todo) => todo.id !== id);
    setTodos(deleted);
    localStorage.setItem('localToDos', JSON.stringify(deleted));
  };

  const clearTodo = () => {
    setTodos([]);
    localStorage.removeItem('localToDos');
  };

  return (
    <div>
      <h1>What tasks do you have on your To Do list for today?</h1>
      <ToDoForm onSubmit={addTodo} clearTodo={clearTodo} />
      <ToDoCount todos={todos} />
      <ToDo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default ToDoList;