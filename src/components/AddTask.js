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
          <h1>Task Management App</h1>
        </div>
        
        <Switch>
          <Route exact path="/" component={ToDoList} />
          <Route path="/details/:id" component={TaskDetails} />
          <Route path="/add" component={AddTask} /> {/* Add this line for the AddTask component */}
        </Switch>
        
        <div className="footer">
          &copy; {new Date().getFullYear()} Task Management App
        </div>
      </div>
    </Router>
  );
}

export default App;
