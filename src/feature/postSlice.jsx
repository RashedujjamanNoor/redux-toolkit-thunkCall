import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchData", async () => {
  return await fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => data.posts);
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: true,
    posts: [],
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchData.fulfilled, (state, action) => {
        (state.isLoading = false), (state.posts = action.payload);
      }),
      builder.addCase(fetchData.rejected, (state, action) => {
        (state.data = []), (state.error = action.payload);
      });
  },
});

export default postSlice.reducer;
