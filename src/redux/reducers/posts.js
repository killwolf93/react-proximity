import * as ActionTypes from '../ActionTypes';
import {CommentsHandler} from "./comments";

const defaultState = {errorMessage: null, posts: [], isLoading: true}
const defaultCommentsState = {errorMessage: null, comments: [], isLoading: false}

export const Posts = (state = defaultState, action) => {
  let posts = [];
  switch (action.type) {
    case ActionTypes.ADD_POSTS:
      action.payload.forEach(post => posts.push(generatePostObject(post)))
      return {...state, isLoading: false, errorMessage: null, posts: posts}
    case ActionTypes.POSTS_LOADING:
      return {...state, isLoading: true, errorMessage: null, posts: []}
    case ActionTypes.POSTS_FAILED:
      return {...state, isLoading: false, errorMessage: action.payload, posts: []}
    default:
      return CommentsHandler(state, action);
  }
};

/**
 * This will get add to the post object a default commentsWrapper object
 * @param  {json} post [json object that contains post information]
 * @return {json}      [Post object with comments default info]
 */
const generatePostObject = (post) => ({...post, comments: defaultCommentsState})

