import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Posts from "./Posts";
import Header from "./Header";


class Main extends Component {
  render() {
    return (
        <>
          <Header/>
          <Switch>
            <Route path="/home" component={Posts}/>
            <Redirect to="/home"/>
          </Switch>
        </>
    );
  }
}

export default withRouter(connect()(Main));
