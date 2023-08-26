import React from "react";

function ToDoCount({ todos }) {
  return (
    <div className="to-do-count">
      There is
      {!todos.length
        ? " no To Do tasks that you need to complete. "
        : todos.length === 1
        ? " 1 To Do task that you need to complete. "
        : todos.length > 1
        ? ` ${todos.length} To Do tasks that you need to complete.`
        : null}
    </div>
  );
}

export default ToDoCount;