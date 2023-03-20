export default function tasksReducer(tasks, action) {
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
}
