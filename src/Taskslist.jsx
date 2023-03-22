import { useState } from "react";

export default function Taskslist({ tasks, onChangeTask, onDeleteTask, onDoneTask }) {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.taskId} onClick={() => onDoneTask(task.taskId)} className={task.isDone ? "done" : ""}>
            <Task task={task} onChangeTask={onChangeTask} />
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDeleteTask(task.taskId);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function Task({ task, onChangeTask }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <button onClick={() => setIsEditing(false)}>Save</button>
        <input type="text" value={task.taskText} onInput={(e) => onChangeTask(task.taskId, e.target.value)} />
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
