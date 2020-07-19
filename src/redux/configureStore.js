import {createStore, combineReducers, applyMiddleware} from "redux";
import {Posts} from "./reducers/posts";
import thunk from "redux-thunk";

export const ConfigureStore = () => {
  const store = createStore(combineReducers({
        posts: Posts
      }),
      applyMiddleware(thunk)
  );
  return store;
}