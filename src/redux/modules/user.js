import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 로그인 창.
export const loadUserDB = (users) => {
  return async function (dispatch) {
    await axios
      .post("http://13.125.4.231/user/login", users)
      /*     console.log(userLists);
    dispatch(loadUser(users)); */
      .then((response) => {
        console.log(response);
        const accessToken = response.data.token;
        localStorage.setItem("token", accessToken);
        if (accessToken) {
          dispatch(loadUser(true));
          console.log(response, "로그인");
          window.location.replace("/");
        }
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
  },
  // 지금은 고정값이 true로 박히는데, 로그인했을 때 true, 로그아웃했을 때 false로 바뀌도록 코드를 짜라.
  reducers: {
    loadUser: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { loadUser } = userSlice.actions;
export default userSlice.reducer;
