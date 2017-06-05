import React, { Component } from 'react';
import { connect } from 'react-redux';

// insert the findSongs action
import {  } from "../../actions/songs";
// insert the component from ./AddSong
import {  } from './AddSong';



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

  // We are using this.state in order to find all of the send information to AddSong.js.
  // This means that we need to make sure the state is updated.
  // componentWillReceiveProps is going to run whenever there is an update to the
  // redux shared state. Below, we're just setting the new props for songs as the
  componentWillReceiveProps(nextProps){
    // try to create a new ingredient. Without the below code, you might
    // run into some issues.


    // set the following:
    // this.setState({
    //   songs: nextProps.songs
    // })
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
            //
            // {songs.map(ingredient =>
            //   <li key={ingredient.id}>
            //     { ingredient.name }
            //
            //   </li>
            // )}


export const ConnectedSongs = connect(mapStateToProps)(Songs)


function mapStateToProps(state){
  return {songs: state.songs,
          albums: state.albums}
}
