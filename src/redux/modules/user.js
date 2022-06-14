import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadUserDB = (users) => {
  return async function (dispatch) {
    await axios
      .get("http://localhost:5001/signup/1", users)
      .then((response) => {
        dispatch(loadUser(response.data));
        //console.log(response);
      });
  };
};

//Reducer
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    username: "reality023",
    nickname: "gridy",
  },

  reducers: {
    loadUser: (state, action) => {
      state.isLogin = true;
    },
  },
});

const { loadUser } = userSlice.actions;
export default userSlice.reducer;
