import React from 'react';
import Loading from "./Loading";
import {connect} from 'react-redux';
import {fetchComments} from "../redux/actionCreators/actionPosts";
import Comment from "./Comment";
import FormComment from "./FormComment";

const Comments = (props) => {
  const {isLoading, errorMessage, comments} = props.comments;
  if (isLoading) {
    return <Loading name='comments'/>
  } else if (errorMessage) {
    return <span>{errorMessage}</span>
  } else {
    return <div className='comments'>
      <FormComment postId={props.postId}/>
      {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
      <button type="button" className="btn btn-sm" onClick={() => props.dispatch(fetchComments(props.postId))}>
        <i className='fa fa-lg fa-comment-o'/>
        Reload comments from server
      </button>
    </div>
  }
}

export default connect()(Comments);