import { configureStore } from "@reduxjs/toolkit";
import { InputMessage } from "./slices/messageSlice";

export const store = configureStore({
  reducer: {
    Message: InputMessage.reducer,
  },
});
