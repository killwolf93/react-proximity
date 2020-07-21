import * as ActionTypes from '../ActionTypes';

export const CommentsHandler = (state, action) => {
  let newState, comments;
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      newState = {...state}
      newState.posts[action.payload.postId - 1].comments = {
        errorMessage: null,
        comments: action.payload.comments,
        isLoading: false
      }
      return newState;
    case ActionTypes.ADD_COMMENT:
      newState = {...state}
      comments = newState.posts[action.payload.postId - 1].comments.comments;
      // Here I need to add and id to the new comment since that id will be use as key for the component
      action.payload.comment.id = comments.length + 1;
      newState.posts[action.payload.postId - 1].comments = {
        errorMessage: null,
        comments: comments.concat(action.payload.comment),
        isLoading: false
      }
      return newState;
    case ActionTypes.COMMENTS_LOADING:
      newState = {...state}
      newState.posts[action.payload - 1].comments = {
        errorMessage: null,
        comments: [],
        isLoading: true
      }
      return newState;
    case ActionTypes.COMMENTS_FAILED:
      newState = {...state}
      newState.posts[action.payload.postId - 1].comments = {
        errorMessage: action.payload.errorMessage,
        comments: [],
        isLoading: false
      }
      return newState;
    default:
      return state;
  }
};