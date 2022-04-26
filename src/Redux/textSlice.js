import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: [],
  reducers: {
    addText: (state, action) => {
      state.push({ id: state.length + 1, name: action.payload });
    },
    setText: (state, action) => {
      if (state === action.payload) {
        return state;
      }
      return action.payload;
    },
    updateText: (state, action) => {
      state = state.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
        }
        return item;
      });
    },
    deleteText(state, action) {
      state = state.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { setText, updateText, deleteText, addText } = textSlice.actions;
export default textSlice.reducer;
