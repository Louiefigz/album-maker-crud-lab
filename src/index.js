import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { createStore } from 'redux';
import rootReducer from './reducers/index'

// Set up your store here.
// ex. const store = createStore()
// Remember, your createStore function takes in an argument
// of a reducer. 


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
        {/* Here we're going to nest your next paths */}
    </Router>
  </Provider>,
  document.getElementById('root'));




  //
  // <Route path="/albums/new" component={ConnectedAlbumsInput} />
  // <Route path="/albums/:id" component={ConnectedAlbumShow} />


  // import { createStore } from 'redux';
  // import rootReducer from './reducers/index'


   // const store = createStore(rootReducer);
