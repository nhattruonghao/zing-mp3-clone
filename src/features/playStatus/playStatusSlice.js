import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentSong: null,
    playList: [],
    isPlay: false,
    isRandom: false,
    isRepeat: false,
}

const playStatusSlice = createSlice({
    name: 'playStatus',
    initialState,
    reducers:{
        setCurrentSong :(state, action) => {
            state.currentSong = action.payload;
        },
        togglePlay: (state) => {
            state.isPlay = !state.isPlay
        },
        playTrue: (state, action) => {
            state.isPlay = true;
        },
        setPlayList: (state, action) => {
            state.playList = action.payload;
        },
        setRandom: (state) => {
            state.isRandom = state.isRandom === false ? true : false
        },
        setRepeat: (state) => {
            state.isRepeat = state.isRepeat === false ? true : false
        }
    }
});
export const {setCurrentSong, togglePlay, playTrue, setPlayList,  setRandom, setRepeat} = playStatusSlice.actions;

export const selecIsPlay = (state) => state.playStatus.isPlay;
export const selectCurrentSong = (state) => state.playStatus.currentSong;
export const selectPlayList = state => state.playStatus.playList;

export default playStatusSlice.reducer;