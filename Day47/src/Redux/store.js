import { configureStore } from "@reduxjs/toolkit";
import { chelloSlice } from "./slices/chelloSlice";
export const store = configureStore({
  reducer: {
    chello:chelloSlice.reducer
  },
});
