import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCourseData: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { setCourseData } = appSlice.actions;

export default appSlice.reducer;
