import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const addr = "http://localhost:5001";

// Mock API
export const getPostList = () => {
  return async function (dispatch) {
    const lists = await axios.get(`${addr}/posts`); // 데이터 가져오기
    dispatch(setPostListRedux(lists.data)); // 리덕스에 저장
  };
};

export const getPostListByCategory = (categoryId) => {
  return async function (dispatch) {
    const lists = await axios.get(`${addr}/posts?category=${categoryId}`);
    dispatch(setPostListRedux(lists.data));
  }
};

export const getPostById = (postId) => {
  return async function (dispatch) {
    const lists = await axios.get(`http://localhost:5001/posts/${postId}`);
    dispatch(setPostRedux(lists.data));
  }
};

export const addPost = (data) => {
  return async function (dispatch) {
    const response = await axios.post(`${addr}/posts`, {data});
    dispatch(addPostRedux(response.data));
  }
};

export const likePost = (data) => {
  return async function (dispatch) {
    if (data.likeByMe) {
      const response = await axios.patch(`${addr}/posts/${data.postId}`, {likeByMe: false, likeCount: data.likeCount - 1});
    } else {
      const response = await axios.patch(`${addr}/posts/${data.postId}`, {likeByMe: true, likeCount: data.likeCount + 1});
    }
    dispatch(likePostRedux(data.postId));
  }
}

export const removePost = (id) => {
  return async function (dispatch) {
    const response = await axios.remove(`${addr}/posts/${id}`);
    
  }
}

// Reducer
const postSlice = createSlice({
  name: "post",
  initialState: {
    list: [],
    post: {}
  },

  reducers: {
    setPostListRedux: (state, action) => {
      state.list = action.payload;
    },

    setPostRedux: (state, action) => {
      state.post = action.payload;
    },

    addPostRedux: (state, action) => {
      state.list.push(action.payload);
    },

    likePostRedux: (state, action) => {
      if (state.post.likeByMe) {
        state.post.likeByMe = false;
        state.post.likeCount = state.post.likeCount - 1;
      } else {
        state.post.likeByMe = true;
        state.post.likeCount = state.post.likeCount + 1;
      }
    },

    removePostRedux: (state, action) => {
      state.post = state.post.filter((post) => {
        return post.id !== action.payload;
      });
    }
  }
});

const { setPostRedux, setPostListRedux, addPostRedux, likePostRedux } = postSlice.actions;
export default postSlice.reducer;