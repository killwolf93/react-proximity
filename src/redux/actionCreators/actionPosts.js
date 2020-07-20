import * as ActionTypes from '../ActionTypes';
import {sendRequest} from '../../shared/fetch'


export const fetchPosts = () => (dispatch) => {
  dispatch({type: ActionTypes.POSTS_LOADING});
  return sendRequest('posts?_limit=4')
      .then(posts => dispatch({type: ActionTypes.ADD_POSTS, payload: posts}))
      .catch(error => dispatch({type: ActionTypes.POSTS_FAILED, payload: error}));
};

export const fetchComments = (postId) => (dispatch) => {
  dispatch({type: ActionTypes.COMMENTS_LOADING, payload: postId});
  return sendRequest(`comments?postId=${postId}`)
      .then(comments => dispatch({type: ActionTypes.ADD_COMMENTS, payload: {comments, postId}}))
      .catch(error => dispatch({type: ActionTypes.COMMENTS_FAILED, payload: {postId, error}}));
}

export const postComment = (comment, postId) => (dispatch) => {
  dispatch({type: ActionTypes.ADD_COMMENT, payload: {comment, postId}})
}