import { useState } from "react";

export default function Newtask({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        taskText && onAddTask(taskText);
        setTaskText("");
        e.target.reset();
      }}
    >
      <div>

      <input
        type="text"
        name="taskText"
        placeholder="Buy some beer"
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
