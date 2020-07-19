import React from 'react';
import {connect} from 'react-redux';
import Loading from "./Loading";

import Post from "./Post";

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}


function Home(props) {
  if (props.posts.isLoading) {
    return <Loading name='posts'/>
  } else if (props.posts.errorMessage) {
    return <span>{props.posts.errorMessage}</span>
  } else {
    return <div className="container">
      <h1>Posts</h1>
      {props.posts.posts.map(post =>
          <Post key={post.id} post={post}/>)}
    </div>
  }

}


export default connect(mapStateToProps)(Home);