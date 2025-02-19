function Playlist(){
    this.songs =[];
}

Playlist.prototype.addSong = function(song){
    this.songs.push(song);
}

const play = new Playlist();
play.addSong("Suno na")
console.log(play.songs);