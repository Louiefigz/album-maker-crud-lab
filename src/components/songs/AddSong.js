import React, { Component } from 'react';
import { connect } from 'react-redux';

// insert bindActionCreators
import {  } from 'redux';
// insert the deleteSong and updateSong actions
import {  } from '../../actions/songs';


export class AddSong extends Component {
  constructor(){
    super();
    this.state ={
      update: false,
      name: '',
      id: 0,
      albumId: 0
    }
  }

// Notice that we are setting the state with the props that are coming in
// from the parent component. componentWillMount() will run before rendering
// the jsx code.
  componentWillMount(){
    this.setState({
      id: this.props.id,
      albumId: this.props.albumId,
    })
  }
  handleDelete(event){
    event.preventDefault();
    // below we want to use the deleteSong action. however, we are going
    // to be passing in this.props or this.state.
  }

  handleUpdate(e){
    e.preventDefault();
    this.setState({
      update: true
    })
  }

  updateName(e){
    e.preventDefault();
    this.setState({
      name: e.target.value,
    })

  }

  handleForm(e){
    e.preventDefault();
    // Here we are attempting to use the updateSong action function.
    // ex. this.props.ActionFunction(this.state).
    this.setState({
      name: '',
      update: false
    });
  }

  render(){
    return(
      this.state.update ?
      <div>
      <form onSubmit={(event)=> this.handleForm(event)}>
        <input placeholder={this.props.name} value={this.state.name} onChange={(event)=> this.updateName(event)}/>
        <input type="submit"/>
        </form>
      </div>
      :
      <div>
        <li>{this.props.name}</li>
        <button onClick={ (event)=>this.handleDelete(event)}> Delete </button>
        <button onClick={ (event)=>this.handleUpdate(event)}> Update </button>

      </div>
    )
  }
}
//
export const ConnectedAddSong = connect(null, mapDispatchToProps)(AddSong)


function mapDispatchToProps(dispatch){

// Add bindActionCreators here.
// ex. return bindActionCreators({
//  propsNameForDelete: actionNameForDelete,
//  propsNameUpdate: actionNameForSong
//  }, dispatch)

}
