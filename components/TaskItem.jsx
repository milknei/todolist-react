import { useState } from "react";

export default function TaskItem({ task, onChangeTask, onDeleteTask, onDoneTask }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <button onClick={() => setIsEditing(isEditing ? false : true)}>{isEditing ? "Save" : "Edit"}</button>
      {isEditing ? (
        <input type="text" value={task.taskText} onInput={(e) => onChangeTask(task.taskId, e.target.value)} />
      ) : (
        <span onClick={() => onDoneTask(task.taskId)} className={task.isDone ? "done" : ""}>
          {task.taskText}
        </span>
      )}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDeleteTask(task.taskId);
        }}
      >
        Delete
      </button>
    </>
  );
}
