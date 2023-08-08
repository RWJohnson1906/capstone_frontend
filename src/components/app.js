import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToDoList from './ToDoList';
import TaskDetails from './TaskDetails';


export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <h1>To Do List</h1>
            <Switch>
              <Route exact path="/" component={ToDoList} />
              <Route path="/details/:taskId" component={TaskDetails} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
