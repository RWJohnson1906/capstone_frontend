import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ToDoList extends Component {
  state = {
    tasks: []
  };


  componentDidMount() {
    this.fetchTasks();
  }


  fetchTasks = async () => {
    try {
      const response = await fetch('https://rwj-to-do-list-5f4780d04441.herokuapp.com/api/get/tasks');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const tasks = await response.json();
      this.setState({ tasks });
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };


  render() {
    const { tasks } = this.state;


    return (
      <div>
        <h2>Task List</h2>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-list-item">
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
