import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList, Footer} from './components/Todo';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/TodoHelpers'

class App extends Component {

    state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build an Awesome App', isComplete: false},
        {id: 3, name: 'Ship it!', isComplete: false}
      ],
      currentTodo: ''
    }

  handleInputChange = (e) => {
    this.setState({
      currentTodo: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: generateId(),
      name: this.state.currentTodo,
      isComplete: false
    };
    const newList = addTodo(this.state.todos, todo);
    this.setState({
      todos: newList,
      currentTodo: '',
      errorMessage: ''
    });
  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'please enter todo name'
    });
  }

  handleToggle = (id) => {
    const todo = findById(id, this.state.todos);
    const toggledTodo = toggleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, toggledTodo);
    this.setState({
      todos: updatedTodos
    });
  }

  handleRemove = (id, event) => {
    event.preventDefault();
    const todos = removeTodo(this.state.todos, id);
    this.setState({todos})
  }

  static contextTypes = {
    route: React.PropTypes.string
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const filteredTodos = filterTodos(this.state.todos, this.context.route);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage &&
            <span className="error">{this.state.errorMessage}</span>}
          <TodoForm handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}/>
          <TodoList todos={filteredTodos}
            handleToggle={this.handleToggle}
            handleRemove={this.handleRemove}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
