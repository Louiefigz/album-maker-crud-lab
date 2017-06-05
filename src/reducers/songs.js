// This generated a random number that we are using to give unique
// a id to every ingredient that we create
import uuidV4  from 'uuid/v4';
const initialState = [{songs:[]}]

export default function songs(state = initialState, action){
  switch (action.type) {
    case 'CREATE_SONG':
      let song = Object.assign({}, action.payload, {id: uuidV4()})
      if (state[0]!== undefined){
        return Object.assign({}, state[0], {
          songs: state[0].songs.concat([song])
        })
      } else {
        return Object.assign({}, state, {
          songs: state.songs.concat([song])
        })
      }
    case "DELETE_SONG":
      // insert your delete method.

    case "UPDATE_SONG":

    // insert your update method. 

    default:
      return state;
  }
}
