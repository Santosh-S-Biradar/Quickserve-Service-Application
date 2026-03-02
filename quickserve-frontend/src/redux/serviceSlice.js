import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getServiceByIdRequest, getServicesRequest } from "../services/serviceService";
import { mockServices } from "../utils/constants";

export const fetchServices = createAsyncThunk("services/fetchAll", async (params, thunkAPI) => {
  try {
    const response = await getServicesRequest(params);
    return response.data?.data || response.data;
  } catch (error) {
    if (error.code === "ERR_NETWORK") {
      return mockServices;
    }
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to fetch services");
  }
});

export const fetchServiceById = createAsyncThunk("services/fetchById", async (id, thunkAPI) => {
  try {
    const response = await getServiceByIdRequest(id);
    return response.data?.data || response.data;
  } catch (error) {
    const found = mockServices.find((item) => String(item.id) === String(id));
    if (found) {
      return found;
    }
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to fetch service details");
  }
});

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    list: [],
    selected: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchServiceById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServiceById.fulfilled, (state, action) => {
        state.loading = false;
        state.selected = action.payload;
      })
      .addCase(fetchServiceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default serviceSlice.reducer;
