import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Todos } from "./Todos";
import { Posts } from "./Posts";
import { Albums } from "./Albums";
import axios from "axios";

export class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todos: [],
      posts: [],
      albums: [],
    };
  }
  componentDidMount() {
    this.fetchTodos();
    this.fetchPosts();
    this.fetchAlbums();
  }
  fetchTodos = () => {
    axios({
      url: "https://jsonplaceholder.typicode.com/todos",
      method: "GET",
    })
      .then((res) => {
        this.setState({
          todos: res.data,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };
  fetchPosts = () => {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
    })
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };
  fetchAlbums = () => {
    axios({
      url: "https://jsonplaceholder.typicode.com/albums",
      method: "GET",
    })
      .then((res) => {
        this.setState({
          albums: res.data,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };
  render() {
    console.log(this.state);
    return (
      <div id="app">
        <h2>Home Page</h2>
        <Navigation />
        <Switch>
          <Route
            path="/todos"
            render={() => {
              return <Todos todosList={this.state.todos} />;
            }}
          />
          <Route
            path="/posts"
            render={() => {
              return <Posts postsList={this.state.posts} />;
            }}
          />
          <Route
            path="/albums"
            render={() => {
              return <Albums albumsList={this.state.albums} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
