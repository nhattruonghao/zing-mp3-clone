import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { shazamApi } from "../../api/shazamApi";

const initialState = {
  chartList: []
};

export const fetchChartListAsync = createAsyncThunk(
  'ChartList/getArtistTopTracks',
  async (re) => {
   return await shazamApi.getArtistTopTracks(re).then(res => res)
  }
);

const chartListSlice = createSlice({
  name: "chartList",
  initialState,
  reducers: {
    setchartList: (state, action) => {
      state.chartList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartListAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchChartListAsync.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(fetchChartListAsync.fulfilled, (state, action) => {
        state.chartList = action.payload;
        state.status = 'success'
      });
  },
});

export const { setChartList } = chartListSlice.actions;

export const selectChartList = (state) => state.chartList.chartList;

export default chartListSlice.reducer;
