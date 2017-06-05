

export function createSong(song){
  return {type: 'CREATE_SONG', payload: song}
}

export function updateSong(song){
  return {type: 'UPDATE_SONG', payload: song}
}
export function deleteSong(song){
  return {type: 'DELETE_SONG', payload: song}
}




// Use this function in order to find only the songs that
// belong to the album that a user clicked on.
export function findSongs(songs,  albumId){
    if (songs.songs !== undefined){
      return  songs.songs.filter((item)=> item.albumId === albumId.albumId )
    } else {
      return  songs.filter((item)=> item.albumId === albumId.albumId )

    }
}
