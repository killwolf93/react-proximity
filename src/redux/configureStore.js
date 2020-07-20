import {createStore, combineReducers, applyMiddleware} from "redux";
import {Posts} from "./reducers/posts";
import {User} from "./reducers/user";
import thunk from "redux-thunk";

export const ConfigureStore = () => {
  const store = createStore(combineReducers({
        posts: Posts,
        user: User,
      }),
      applyMiddleware(thunk)
  );
  return store;
}