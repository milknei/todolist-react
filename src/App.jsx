import { useState } from "react";
import Newtask from "./Newtask";
import Taskslist from "./Taskslist";
import "./App.css";

const initialTasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
const initialTaskIds = localStorage.getItem("taskIds") ? JSON.parse(localStorage.getItem("taskIds")) : [0];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskIds, setTaskIds] = useState(initialTaskIds);

  function getAvailableId() {
    let freeId;
    let ids = [...taskIds];

    if (taskIds.length > 1) {
      freeId = ids.shift();
    } else {
      freeId = ids.pop();
      ids.push(freeId + 1);
    }

    setTaskIds(ids);
    return freeId;
  }

  function handleAddTask(taskText) {
    setTasks([
      {
        taskId: getAvailableId(),
        taskText: taskText,
        isDone: false,
      },
      ...tasks,
    ]);
  }

  function handleChangeTask(taskId, taskText) {
    setTasks(
      tasks.map((task) => {
        if (task.taskId === taskId) {
          return {
            ...task,
            taskText: taskText,
          };
        } else {
          return task;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    let ids = [taskId, ...taskIds];
    setTaskIds(ids);
    setTasks(tasks.filter((task) => task.taskId !== taskId));
  }

  function handleDoneTask(taskId) {
    let doneTasksList = [];
    let newTaskList = [];

    tasks.map((task) => {
      if (task.taskId === taskId) {
        switch (task.isDone) {
          case false:
            doneTasksList.unshift({
              ...task,
              isDone: true,
            });
            break;
          case true:
            newTaskList.unshift({
              ...task,
              isDone: false,
            });
            break;
        }
      } else if (task.isDone) {
        doneTasksList.push(task);
      } else {
        newTaskList.push(task);
      }
    });

    setTasks([...newTaskList, ...doneTasksList]);
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("taskIds", JSON.stringify(taskIds));

  return (
    <div className="App">
      <div>
        <h2>My ToDo List</h2>
        <div>
          <Newtask onAddTask={handleAddTask} />
          <Taskslist
            tasks={tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
            onDoneTask={handleDoneTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
