// import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

function ToDo({ todos, completeTodo, removeTodo }) {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'to-do-row complete' : 'to-do-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <RiCloseCircleLine
        onClick={() => removeTodo(todo.id)}
        className='delete-icon'
      />
    </div>
  ));
}

export default ToDo;