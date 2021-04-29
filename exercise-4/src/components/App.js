import React from "react";
import { Todos } from "./Todos";

export class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todos: [
        { id: 1, todo: "Make coffee", done: false },
        { id: 2, todo: "Turn on computer", done: false },
        { id: 3, todo: "Read news", done: false },
        { id: 4, todo: "Eat your breakfast", done: false },
        { id: 5, todo: "Start programming", done: false },
      ],
      newTodo: "",
      items: [],
    };
  }
  inputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  markTodoAsDone = (todoObject) => {
    this.setState({
      todos: [
        ...this.state.todos.map((row) =>
          row.id === todoObject.id
            ? { id: row.id, todo: row.todo, done: !row.done }
            : row
        ),
      ],
    });
  };
  addToList = () => {
    var object = {
      id: this.state.todos.length + 1,
      todo: this.state.newTodo,
      done: false,
    };
    this.setState({
      todos: [...this.state.todos, object],
      newTodo: "",
    });
  };
  removeItem = (itemToRemove) => {
    var newItems = this.state.todos.filter((_todo) => {
      return _todo !== itemToRemove;
    });
    this.setState({
      todos: newItems,
    });
  };
  render() {
    console.log(this.state);
    return (
      <div id="app">
        <h2>Your TODO List</h2>
        <input
          type="text"
          value={this.state.newTodo}
          placeholder="Add New Todo"
          name="newTodo"
          onChange={this.inputChangeHandler}
        ></input>
        <button type="button" onClick={this.addToList}>
          Add Todo
        </button>
        <Todos
          todos={this.state.todos}
          markTodoAsDone={this.markTodoAsDone}
          removeItem={this.removeItem.bind(this)}
        />
      </div>
    );
  }
}
