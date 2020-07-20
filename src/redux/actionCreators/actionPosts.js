import * as ActionTypes from '../ActionTypes';
import {sendRequest} from '../../shared/fetch'


export const fetchPosts = () => (dispatch) => {
  dispatch(postsLoading());
  return sendRequest('posts')
      .then(posts => dispatch(addPosts(posts)))
      .catch(error => dispatch(postsFailed(error.message)));
};

export const postsFailed = (errorMessage) => ({
  type: ActionTypes.POSTS_FAILED,
  payload: errorMessage
})

export const addPosts = (posts) => ({
  type: ActionTypes.ADD_POSTS,
  payload: posts
});

export const postsLoading = () => ({
  type: ActionTypes.POSTS_LOADING
})

export const fetchComments = (postId) => (dispatch) => {
  dispatch(commentsLoading(postId));
  setTimeout(() => {
    return sendRequest(`comments?postId=${postId}`)
        .then(comments => dispatch(addComments({comments, postId})))
        .catch(error => dispatch(commentsFailed({postId, error})));

  }, 3000)
};

export const commentsFailed = (payload) => ({
  type: ActionTypes.COMMENTS_FAILED, payload
})

export const addComments = (payload) => ({
  type: ActionTypes.ADD_COMMENTS, payload
});

export const addComment = (payload) => ({
  type: ActionTypes.ADD_COMMENT, payload
});

export const commentsLoading = (postId) => ({
  type: ActionTypes.COMMENTS_LOADING,
  payload: postId
});

export const postComment = (comment, postId) => (dispatch) => {
  dispatch(addComment({comment, postId}))
}