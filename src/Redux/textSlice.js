import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: [],
  reducers: {
    setText: (state, action) => {
      let localText = JSON.parse(localStorage.getItem("text"));
      return localText;
    },
    deleteAll: (state, action) => {
      localStorage.removeItem("text");
      return [];
    },
  },
});
export const { setText, deleteAll } = textSlice.actions;
export default textSlice.reducer;
