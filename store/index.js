import { configureStore } from "@reduxjs/toolkit";
import dropDownReducer from "../components/DropDown/dropDownSlice";

export const store = configureStore({
  reducer: {
    dropDown: dropDownReducer,
  },
});
