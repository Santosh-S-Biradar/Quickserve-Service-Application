import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginRequest, registerRequest } from "../services/authService";

const savedToken = localStorage.getItem("quickserve_token");
const savedUser = localStorage.getItem("quickserve_user");

export const login = createAsyncThunk("auth/login", async (payload, thunkAPI) => {
  try {
    const response = await loginRequest(payload);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
  }
});

export const register = createAsyncThunk("auth/register", async (payload, thunkAPI) => {
  try {
    const response = await registerRequest(payload);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Registration failed");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: savedUser ? JSON.parse(savedUser) : null,
    token: savedToken || null,
    loading: false,
    error: null
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("quickserve_token");
      localStorage.removeItem("quickserve_user");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("quickserve_token", action.payload.token);
        localStorage.setItem("quickserve_user", JSON.stringify(action.payload.user));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
