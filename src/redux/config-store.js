import { configureStore } from "@reduxjs/toolkit";
import userTemplate from "./slices/user-template";

export const store = configureStore({
    reducer: {
      userTemplate
    },
  });