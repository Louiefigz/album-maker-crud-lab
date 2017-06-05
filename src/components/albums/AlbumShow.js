import React, { Component } from 'react';
import { connect } from 'react-redux';
// We are using the goback method below
import {browserHistory} from "react-router";


// We are importing a specific action and two components below
import {  } from '../../actions/albums';
import {  } from '../songs/SongsInput';
import {  } from '../songs/Songs';





export class AlbumShow extends Component {
  render(){

    // findAlbum finds the Album using the albumId
    var albumOne = findAlbum(this.props.albums,  this.props.params.id);
    if (albumOne.length === 0){
        var displayAlbum = <h1>Not found</h1>
    }else {
      var displayAlbum = <h1>{albumOne[0].name}</h1>

    }
    return(
        <div>
           {displayAlbum}
           <ConnectedSongs albumId={albumOne[0].id}/>
           < ConnectedSongsInput albumId={albumOne[0].id} />
           {/* this is how we go back to the previous page without losing your data*/}
           <button onClick={browserHistory.goBack}>Go Back</button>
        </div>
    )
  }
};


export const ConnectedAlbumShow = connect(mapStateToProps)(AlbumShow);

// We only use actions in order to package data for a reducer. If it's not going to be
// sent to a reducer, just call the function straight out.

function mapStateToProps(state){

  // Here, set your props.album to be ... state.albums
  return {albums: state.albums}
}
