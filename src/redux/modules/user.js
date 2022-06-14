import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    username: "reality023",
    nickname: "gridy"
  },
  reducers: {
    // setUser: (state, action) => {
    //   state.post = action.payload;
    // }
  }
});

export default userSlice.reducer;