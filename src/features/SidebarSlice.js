import { createSlice } from "@reduxjs/toolkit";
import { Form } from "react-router-dom";

const initialState = {
  openClose: false,
  test: 0,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setOpen: (state) => {
      state.openClose = state.openClose === true ? false : true;
    },
    setIncrement: (state, action) => {
      state.test = state.test += action.payload;
    },
  },
});

export const { setIncrement, setOpen } = sidebarSlice.actions;
export default sidebarSlice.reducer;
