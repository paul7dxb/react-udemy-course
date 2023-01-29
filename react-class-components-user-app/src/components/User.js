import classes from './User.module.css';

import { Component } from 'react';
//Component adds props property accessed by this.props

class User extends Component {
  render(){
    return <li className={classes.user}>{this.props.name}</li>
  }
}


export default User;
