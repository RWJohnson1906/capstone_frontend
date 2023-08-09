import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToDoList from './ToDoList';
import TaskDetails from './TaskDetails';
import AddTask from './AddTask'; 
import '../style/app.scss';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="header">
          <h1>To-Do List</h1>
        </div>
        
        <Switch>
          <Route exact path="/" component={ToDoList} />
          <Route path="/details/:id" component={TaskDetails} />
          <Route path="/add" component={AddTask} /> 
        </Switch>
        
        <div className="footer">
          <p>Capstone ToDo List Project</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
