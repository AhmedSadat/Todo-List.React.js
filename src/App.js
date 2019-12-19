import React, { Component , Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import TodoInput from './components/TodoInput' ; 
import TodoList from './components/Todolist' ;

class App extends Component {
  render() {
    return (   
      <Fragment>    
        <TodoInput />
        <TodoList />
      </Fragment>
    );
  }
}

export default App;
