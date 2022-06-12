import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import post from "./modules/post";
import comment from "./modules/comment";
import user from "./modules/user";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory(); // thunk

const middlewares = [thunk]; // thunk

const enhancer = applyMiddleware(...middlewares); // thunk
const store = configureStore({
  reducer: {
    post, comment, user
  }
}, enhancer); // thunk

export default store;