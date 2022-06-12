import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "post",
  initialState: {
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