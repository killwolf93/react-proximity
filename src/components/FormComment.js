import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postComment} from "../redux/actionCreators/actionPosts";

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  postComment: (comment, postId) => dispatch(postComment(comment, postId))
})

const FormComment = (props) => {
  const [body, setBody] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const {name, email} = props.user;
    props.postComment({name, email, body}, props.postId)
    setBody('')
  }
  return (
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <input type="text" className='form-control' value={body} onChange={e => setBody(e.target.value)}/>
          </div>
          <div className="col">
            <input type="submit" className="btn btn-sm" value="Submit" disabled={body.trim().length < 2}/>
          </div>
        </div>
      </form>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComment);