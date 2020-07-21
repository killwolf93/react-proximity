import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loading from "./Loading";
import {fetchPosts} from "../redux/actionCreators/actionPosts";

import Post from "./Post";

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    if (this.props.posts.isLoading) {
      return <Loading name='posts'/>
    } else if (this.props.posts.errorMessage) {
      return <span>{this.posts.errorMessage}</span>
    } else {
      return <div className="container">
        <h1>Posts</h1>
        {this.props.posts.posts.map(post =>
            <Post key={post.id} post={post}/>)}
      </div>
    }
  }
}

export default connect(mapStateToProps, {fetchPosts})(Posts);