import { configureStore } from "@reduxjs/toolkit";
import HopiScreenReducer from "../screens/HopiScreenSlice";

export const store = configureStore({
  reducer: {
    hopiscreen: HopiScreenReducer,
  },
});
