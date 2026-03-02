import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cancelBookingRequest, createBookingRequest, getBookingsRequest } from "../services/bookingService";

export const fetchBookings = createAsyncThunk("bookings/fetch", async (_, thunkAPI) => {
  try {
    const response = await getBookingsRequest();
    return response.data?.data || response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to fetch bookings");
  }
});

export const createBooking = createAsyncThunk("bookings/create", async (payload, thunkAPI) => {
  try {
    const response = await createBookingRequest(payload);
    return response.data?.data || response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to create booking");
  }
});

export const cancelBooking = createAsyncThunk("bookings/cancel", async (id, thunkAPI) => {
  try {
    await cancelBookingRequest(id);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to cancel booking");
  }
});

const bookingSlice = createSlice({
  name: "bookings",
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(cancelBooking.fulfilled, (state, action) => {
        state.items = state.items.map((item) => item.id === action.payload ? { ...item, status: "Cancelled" } : item);
      });
  }
});

export default bookingSlice.reducer;
