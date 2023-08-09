import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TaskDetails = () => {
  const { taskId } = useParams();
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === parseInt(taskId))
  );

  return (
    <div>
      {task ? (
        <div>
          <h2>Task Details</h2>
          <p>Title: {task.title}</p>
        </div>
      ) : (
        <p>Task Not Found!</p>
      )}
    </div>
  );
};

export default TaskDetails;
