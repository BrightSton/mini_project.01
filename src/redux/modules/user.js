import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
  },
  reducers: {
    // setUser: (state, action) => {
    //   state.post = action.payload;
    // }
  }
});

// { isLogin: true }

export default userSlice.reducer;