import React from 'react';
import { Link } from 'react-router-dom';

export default function ToDoList() {

  return (
    <div>
      <h2>Task List</h2>
      {/* <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-list-item">
            <span className="task-title">{task.title}</span> -{' '}
            <div className="details-link-container">
              <Link to={`/details/${task.id}`} className="task-details-link">
                View Details
              </Link>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );

}
