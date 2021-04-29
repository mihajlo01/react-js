import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Comments } from "./Comments";
import axios from "axios";
import { base_url } from "./../constants";

export class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      comments: [],
    };
  }
  componentDidMount() {
    this.fetchComments();
  }
  fetchComments = () => {
    axios({
      url: `${base_url}/comments`,
      method: "get",
    })
      .then((res) => {
        this.setState({
          comments: res.data,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };
  render() {
    return (
      <div id="app">
        <Navigation />
        <Switch>
          <Route
            path="/home"
            render={() => {
              return <Home />;
            }}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/comments"
            render={() => {
              return (
                <Comments
                  fetchComments={this.fetchComments}
                  comments={this.state.comments}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
