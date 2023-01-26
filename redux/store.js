import { reducer } from "@/reducers/baseInfo/reducer";
import { configureStore } from "@reduxjs/toolkit";
import baseInfo from "./reducers/baseInfo";

export const store = configureStore({
  reducer: {
    baseInfo: baseInfo
  },
});
