import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import chartListReducer from '../features/ChartList/ChartListSlice'
import playStatusReducer from '../features/playStatus/playStatusSlice'
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chartList: chartListReducer,
    playStatus: playStatusReducer,
  },
  middleware: [thunk],
});
