import React from 'react';
import './styles/Post.scss'
import Comments from "./Comments";

const Post = (props) => {
  const {title, body, comments, id} = props.post;
  return (
      <div className="card post">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <Comments comments={comments} postId={id}/>
        </div>
      </div>
  )
}

export default Post;