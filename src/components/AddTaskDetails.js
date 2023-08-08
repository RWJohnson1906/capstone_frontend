import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskDetails } from '../actions';
import '../style/AddTaskDetails.scss'; 

function AddTaskDetails({ match }) {
  const dispatch = useDispatch();
  const [details, setDetails] = useState('');

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const taskId = parseInt(match.params.id);
    dispatch(addTaskDetails(taskId, details)); 
    setDetails('');
  };

  return (
    <div className="add-task-details">

      <h2>Add Task Details</h2>

      <form onSubmit={handleFormSubmit}>
        
        <label htmlFor="details">Details:</label>

        <input
          type="text"
          id="details"
          value={details}
          onChange={handleDetailsChange}
          required
        />

        <button type="submit">Add Details</button>

      </form>
    </div>
  );
}

export default AddTaskDetails;
