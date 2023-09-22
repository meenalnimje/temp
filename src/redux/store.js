import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./slice/appConfigSlice";
export default configureStore({
  reducer: {
    appConfigReducer,
  },
});
