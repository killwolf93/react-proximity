import * as ActionTypes from '../ActionTypes';

const defaultState = {errorMessage: null, posts: [], isLoading: true}
const defaultCommentsState = {errorMessage: null, comments: [], isLoading: false}

export const Posts = (state = defaultState, action) => {
  let posts = [], newState, comments;
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

/**
 * This will get add to the post object a default commentsWrapper object
 * @param  {json} post [json object that contains post information]
 * @return {json}      [Post object with comments default info]
 */
const generatePostObject = (post) => ({...post, comments: defaultCommentsState})

