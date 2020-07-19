import React from 'react';
import Loading from "./Loading";

const Comments = (props) => {
  console.log('props', props)
  const {isLoading, errorMessage, comments} = props.comments;
  if (isLoading) {
    return <Loading name='comments'/>
  } else if (errorMessage) {
    return <span>{errorMessage}</span>
  } else if (comments.length === 0) {
    return <button type="button" className="btn btn-sm">
      <i className='fa fa-lg fa-comment-o'/>
      See comments
    </button>
  } else {
    return <>{comments.map(comment => <span>{comment.body}</span>)}</>
  }
}

export default Comments;