import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "Slave", duration: "6:38" },
        { title: "Deadhead", duration: "8:05" },
        { title: "Luminary", duration: "3:13" },
        { title: "Cafo", duration: "6:41" }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
}); 
