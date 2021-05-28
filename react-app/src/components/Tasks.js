import { useState } from "react";
import Task from "./Task";

const Tasks = ({ tasks }) => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <div>
      {Tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
