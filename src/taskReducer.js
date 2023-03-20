export default function tasksReducer(tasks, action) {
  function localStorgeChange() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          taskId: action.taskId,
          taskText: action.taskText,
          isDone: false,
        },
      ];
      console.log("Asd");
    }

    case "change": {
      return tasks.map((task) => {
        if (task.taskId === action.task.taskId) {
          return action.task;
        } else {
          return task;
        }
      });
    }

    case "delete": {
      return tasks.filter((task) => task.taskId !== action.taskId);
    }

    default: {
      throw Error("Unknown action:", action.type);
    }
  }
  console.log("df");
}
