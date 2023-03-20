import { useReducer } from "react";
import tasksReducer from "./taskReducer";
import Newtask from "./Newtask";
import Taskslist from "./Taskslist";
import "./App.css";

let nextId = 2;

const initialTasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(taskText) {
    dispatch({
      type: "add",
      taskId: nextId++,
      taskText: taskText,
    });
  }

  function handleChangeTask(task, taskText) {
    dispatch({
      type: "change",
      task: {
        ...task,
        taskText: taskText,
      },
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "delete",
      taskId: taskId,
    });
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));

  return (
    <div className="App">
      <div>
        <h2>My ToDo List</h2>
        <div>
          <Newtask onAddTask={handleAddTask} />
          <Taskslist tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
