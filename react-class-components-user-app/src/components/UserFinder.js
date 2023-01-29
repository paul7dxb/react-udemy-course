import { Fragment, useState, useEffect, Component } from "react";
import UsersContext from "../store/users-context";
import ErroryBoundary from "./ErrorBoundary";

import classes from "./UserFinder.module.css";

import Users from "./Users";

class UserFinder extends Component {
  //Can only be set once
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users });
  }

 componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErroryBoundary>
        <Users users={this.state.filteredUsers} />
        </ErroryBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
