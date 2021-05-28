import { FaTimes } from "react";

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>
        {task.text}
        <FaTimes />
      </h3>
    </div>
  );
};

export default Task;
