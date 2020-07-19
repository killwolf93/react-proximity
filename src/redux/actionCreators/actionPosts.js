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
});