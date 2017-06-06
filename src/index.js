import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { ConnectedAlbumsInput } from './components/albums/AlbumsInput'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { ConnectedAlbumShow } from "./components/albums/AlbumShow";
import { createStore } from 'redux';
import rootReducer from './reducers/index'


 const store = createStore(rootReducer);



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/albums/new" component={ConnectedAlbumsInput} />
      <Route path="/albums/:id" component={ConnectedAlbumShow} />
    </Router>
  </Provider>,
  document.getElementById('root'));

store.dispatch({'type': "CREATE_SONG", 'action': [] })
