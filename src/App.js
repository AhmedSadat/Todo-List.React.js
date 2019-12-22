import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/Todolist';
import uuid from 'uuid';

class App extends Component {

  state = {

    items: [],
    id: uuid(),
    item: '',
    editItem: false

  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    }
      );
  }

  handleSubmit = (e) => {

    e.preventDefault();
    const newItem = { id: this.state.id, title: this.state.item };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      editItem: false,
      item: '',
      id: uuid()
    });

  }

  clearList = () => {



    this.setState({
               items : []                  
    });

  }

  handleDelete = (id) => {

    let index = this.state.items.findIndex((el) => {

      el.id === id
    })

    const newItems = this.state.items;
    newItems.splice(index, 1);

    this.setState({
      items: newItems
    });

  }

  handleEdit = () => {

  }



  render() {

    console.log(this.state);
    return (

      <div className="container">
        <div className="col-lg-10 col-md-8 mx-auto mt-5">
          <div className="GlobaHeading">
            <h3>TodoList App</h3>
          </div>
        </div>

        <TodoInput

          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
           item={this.state.item}
        />

        <TodoList

          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}

        />
      </div>


    );
  }
}

export default App;
