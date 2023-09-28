import { createSlice } from "@reduxjs/toolkit";
const appConfigSlice = createSlice({
  name: "appConfigSlice",
  initialState: {
    isLoading: false,
    toastData: {},
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    showToast: (state, action) => {
      state.toastData = action.payload;
    },
  },
});
export default appConfigSlice.reducer;
export const { setLoading, showToast } = appConfigSlice.actions;
