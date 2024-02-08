import { createSlice } from "@reduxjs/toolkit";

export const InputMessage = createSlice({
  name: "message",
  initialState: {
    message: "",
  },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = InputMessage.actions;
export default InputMessage.reducer;
