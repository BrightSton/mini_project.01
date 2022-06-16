import { createSlice } from "@reduxjs/toolkit";
import { axiosUser } from "../../axios/axiosData";

// 로그인 창
export const loadUserDB = (users) => {
  return async function (dispatch) {
    try {
      const response = await axiosUser.login(users);
      const accessToken = response.data.token;
      localStorage.setItem("token", accessToken);
      if (accessToken) {
        dispatch(loadUser(true));
        window.location.replace("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
};

//Reducer
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
  },
  reducers: {
    loadUser: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { loadUser } = userSlice.actions;
export default userSlice.reducer;
