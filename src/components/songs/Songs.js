import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findSongs } from "../../actions/songs";
import { ConnectedAddSong } from './AddSong';



export class Songs extends Component {
  constructor(){
    super();
    this.state={
      songs: [],
      albumId: 0
    }
  }
  componentWillMount(){
    this.setState({
      albumId: this.props.albumId,
      songs: this.props.songs,
      albums: this.props.albums
    })

  }

// We are using this.state in order to send information to AddSong.js.
// This means that we need to make sure the state is updated.
// componentWillReceiveProps is going to
  componentWillReceiveProps(nextProps){
    this.setState({
      songs: nextProps.songs
    })
  }



  render(){
    let songs = findSongs(this.state.songs, this.state);

    let song = songs.map(function(song){
      console.log('working')
       return <ConnectedAddSong key={song.id}
               name={song.name}
               id={song.id}
               albumId={song.albumId}/>
    })


    return(
        <div className='App'>
          songs
          <ul>
          {song}
          </ul>
        </div>
    )
  }
}

export const ConnectedSongs = connect(mapStateToProps)(Songs)


function mapStateToProps(state){
  return {songs: state.songs,
          albums: state.albums}
}
