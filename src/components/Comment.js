import React from 'react';
import './styles/Comment.scss'

const Comment = (props) => {
  const {name, body, email} = props.comment;
  return (
      <div className="comment">
        <h6>{name}:(<small>{email}</small>)</h6>
        <p>{body}</p>
      </div>
  )
}

export default Comment;