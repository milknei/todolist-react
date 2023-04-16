import TaskItem from "./TaskItem";

export default function Taskslist({ tasks, onChangeTask, onDeleteTask, onDoneTask }) {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.taskId}>
            <TaskItem task={task} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask} onDoneTask={onDoneTask} />
          </li>
        );
      })}
    </ul>
  );
}
