import * as ActionTypes from '../ActionTypes';

const defaultState = {errorMessage: null, posts: [], isLoading: true}
const defaultCommentsState = {errorMessage: null, comments: [], isLoading: false}

export const Posts = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_POSTS:
      let posts = [];
      action.payload.forEach(post => posts.push(generatePostObject(post)))
      return {...state, isLoading: false, errorMessage: null, posts: posts}
    case ActionTypes.POSTS_LOADING:
      return {...state, isLoading: true, errorMessage: null, posts: []}
    case ActionTypes.POSTS_FAILED:
      return {...state, isLoading: false, errorMessage: action.payload, posts: []}
    default:
      return state;
  }
};

const generatePostObject = (post) => ({...post, comments: defaultCommentsState})

