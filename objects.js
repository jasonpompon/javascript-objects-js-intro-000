var playlist = {
    MJ: "Thriller",
    Pink: "Kiss roses"
}

var updatePlaylist = (playlist, artistName, songTitle) => {
    playlist[artistName] = songTitle;
    return playlist
}

var removeFromPlaylist = (playlist, artistName) => {
    
    return delete playlist.artistName;
}
