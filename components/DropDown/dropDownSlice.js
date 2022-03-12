import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: "IN",
  countries: [],
};

export const dropDownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    addCountries: (state, action) => {
      state.countries = action.payload;
    },
    updateCountry: (state, action) => {
      state.country = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCountries, updateCountry } = dropDownSlice.actions;

export default dropDownSlice.reducer;
