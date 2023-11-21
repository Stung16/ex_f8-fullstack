import { configureStore } from "@reduxjs/toolkit";
import { fetchSlice } from "./slices/fetchSlice";
export const store = configureStore({
  reducer: {
    shop:fetchSlice.reducer
  },
});
