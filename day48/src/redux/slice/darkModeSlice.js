import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeLight: true,
};
export const darkModeSlice = createSlice({
  name: "drakMode",
  initialState,
  reducers: {
    chagneTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});
