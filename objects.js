var playlist = {
    MJ: "Thriller",
    Pink: "Kiss roses"
}

var updatePlaylist = (playlist, artistName, songTitle) {
    return Object.assign({}, playlist, {artistName: songTitle})
}