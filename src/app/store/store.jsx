import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../../feature/postSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default store;
