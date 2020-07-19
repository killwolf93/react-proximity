import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Home from "./Home";
import Header from "./Header";
import {fetchPosts} from "../redux/actionCreators/actionPosts";
//import {fetchComments} from "../redux/actionCreators/actionComments";


const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  //fetchComments: (postId) => dispatch(fetchComments(postId))
})


class Main extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
        <>
          <Header/>
          <Switch>
            <Route path="/home" component={Home}/>
            <Redirect to="/home"/>
          </Switch>
        </>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
