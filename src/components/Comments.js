import React from 'react';
import Loading from "./Loading";
import {connect} from 'react-redux';
import {fetchComments} from "../redux/actionCreators/actionPosts";
import Comment from "./Comment";

const Comments = (props) => {
  const {isLoading, errorMessage, comments} = props.comments;
  if (isLoading) {
    return <Loading name='comments'/>
  } else if (errorMessage) {
    return <span>{errorMessage}</span>
  } else if (comments.length === 0) {
    return <button type="button" className="btn btn-sm" onClick={() => {
      props.dispatch(fetchComments(props.postId))
    }}>
      <i className='fa fa-lg fa-comment-o'/>
      See comments
    </button>
  } else {
    return <div className='comments'>
      {comments.map(comment => <Comment comment={comment}/>)}
    </div>
  }
}

export default connect()(Comments);