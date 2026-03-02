import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import serviceReducer from "./serviceSlice";
import bookingReducer from "./bookingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    services: serviceReducer,
    bookings: bookingReducer
  }
});
