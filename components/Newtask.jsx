import { useState } from "react";

export default function Newtask({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    taskText && onAddTask(taskText);
    setTaskText("");
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="taskText"
          placeholder="I need to..."
          onInput={(e) => {
            setTaskText(e.target.value);
          }}
        />
      </div>
      <div>
        <button type="submit">Add task</button>
      </div>
    </form>
  );
}
