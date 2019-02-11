
import {combineReducers} from "redux"

 const songsReducer = () => {
    return [
        {title: "No Scrubs", duration: "4:05"},
        {title: "Macarena", duration: "1:07"},
        {title: "All star", duration: "3:15"}
    ]
}

 const selectedSongReducer = (selected = null, action) => {
    if("SONG_SELECTED" === action.type){
        return action.payload;
    }
    return selected;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});