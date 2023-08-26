import react, { useState, useEffect, useRef } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { GrFormAdd } from 'react-icons/gr';

function ToDoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: new Date().getTime(),
      text: input,
    });

    setInput("");
  };

  const handleClear = (e) => {
    e.preventDefault();

    props.clearTodo();

    setInput("");
  };

  return (
    <form className="to-do-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={input}
        placeholder="Enter your To Do task here..."
        className="to-do-input"
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button className="add-button">
        <GrFormAdd className="add-icon" />
      </button>
      <button className="clear-button" onClick={handleClear}>
        <AiOutlineClear className="clear-icon" />
      </button>
    </form>
  );
}

export default ToDoForm;