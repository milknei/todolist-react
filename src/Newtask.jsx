import { useState } from "react";

export default function Newtask({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        taskText && onAddTask(taskText);
        e.target.reset();
      }}
    >
      <input
        type="text"
        name="taskText"
        placeholder="Buy some beer"
        onInput={(e) => {
          setTaskText(e.target.value);
        }}
      />
      <button type="submit">Add task</button>
    </form>
  );
}
