import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPost } from "../../api";
import { apiRouteList } from "../../utils/api-routes";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const res = await getPost(`/${apiRouteList.auth}user`); // Corrected function name
  return res;
});

export const logout = createAsyncThunk("user/logout", async () => {
  const res = await getPost(`${apiRouteList.auth}logout`); // Corrected function name
  return res;
});

const userSlice = createSlice({
  name: "user",
  initialState: { username: undefined, error: undefined, role: "", status: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
        state.username = "";
        state.role = "";
        state.error = undefined;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error;
        state.role = "";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "ready";
        state.username = action.payload.username;
        state.role =
          !action.payload.username || action.payload.username === ""
            ? ""
            : "admin";
      })
      .addCase(logout.pending, (state, action) => {
        state.status = "logout";
        state.error = undefined;
        state.username = action.payload.username;
        state.role = "";
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error;
        state.role = "";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = "ready";
        state.username = "";
        state.role = "";
      });
  },
});

export default userSlice.reducer;
