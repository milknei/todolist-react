import { useState } from "react";

export default function Taskslist({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ol>
      {tasks.map((task) => {
        return (
          <li key={task.taskId}>
            <Task task={task} onChangeTask={onChangeTask} />
            <button
              onClick={() => {
                onDeleteTask(task.taskId);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ol>
  );
}

function Task({ task, onChangeTask }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <button onClick={() => setIsEditing(false)}>Save</button>
        <input type="text" value={task.taskText} onInput={(e) => onChangeTask(task, e.target.value)} />
      </>
    );
  } else {
    taskContent = (
      <>
        <button
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
        <span>{task.taskText} </span>
      </>
    );
  }

  return taskContent;
}
