import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const addr = "http://localhost:5001";

//회원가입 창.
export const signupUserDB = (data) => {
  return function (dispatch) {
    axios.post(`${addr}/signup`, data).then((response) => {
      dispatch(signupUser(data));
      console.log(response);
      //window.alert("회원가입 완료!");
      //window.location.replace("/login");
    });
  };
};

// 로그인 창.
export const loadUserDB = (users) => {
  return async function (dispatch) {
    await axios
      .post(`${addr}/login`, users)
      /*     console.log(userLists);
    dispatch(loadUser(users)); */
      .then((response) => {
        dispatch(loadUser(users));
        console.log(response);
        //window.location.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//Reducer
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    userList: [],
    /* username: "reality023",
    password: "123123",
    nickname: "gridy", */
  },
  // 지금은 고정값이 true로 박히는데, 로그인했을 때 true, 로그아웃했을 때 false로 바뀌도록 코드를 짜라.
  reducers: {
    loadUser: (state, action) => {
      state.userList.push(action.payload);
      state.isLogin = true;
    },
    signupUser: (state, action) => {
      state = action.payload;
    },
  },
});

const { loadUser, signupUser } = userSlice.actions;
export default userSlice.reducer;
