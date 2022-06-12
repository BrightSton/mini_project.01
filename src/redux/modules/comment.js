import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const addr = "http://localhost:5001";

export const getCommentListByPostId = (postId) => {
  return async function (dispatch) {
    const lists = await axios.get(`${addr}/comment?postId=${postId}`);
    dispatch(setCommentListRedux(lists.data));
  }
}

export const addComment = (data) => {
  return async function (dispatch) {
    const comment = await axios.post(`${addr}/comment`, data);
    dispatch(addCommentRedux(comment.data));
  }
}

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    count: 0,
    list: [],
  },
  reducers: {
    setCommentListRedux: (state, action) => {
      state.list = action.payload;
      state.count = action.payload.length;
    },
    addCommentRedux: (state, action) => {
      state.list.push(action.payload);
      state.count++;
    }
  }
});

const { setCommentListRedux, addCommentRedux } = commentSlice.actions;
export default commentSlice.reducer;