import * as ActionTypes from '../ActionTypes';

const defaultState = {errorMessage: null, posts: [], isLoading: true}
const defaultCommentsState = {errorMessage: null, comments: [], isLoading: false}

export const Posts = (state = defaultState, action) => {
  let posts = [], newState;
  switch (action.type) {
    case ActionTypes.ADD_POSTS:
      action.payload.forEach(post => posts.push(generatePostObject(post)))
      return {...state, isLoading: false, errorMessage: null, posts: posts}
    case ActionTypes.POSTS_LOADING:
      return {...state, isLoading: true, errorMessage: null, posts: []}
    case ActionTypes.POSTS_FAILED:
      return {...state, isLoading: false, errorMessage: action.payload, posts: []}
    case ActionTypes.ADD_COMMENTS:
      newState = {...state}
      newState.posts[action.payload.postId - 1].comments = {
        errorMessage: null,
        comments: action.payload.comments,
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

const generatePostObject = (post) => ({...post, comments: defaultCommentsState})

