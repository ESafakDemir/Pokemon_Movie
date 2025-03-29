// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MovieList from './components/MovieList';

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1 className="text-center">Movie App</h1>
        <MovieList />
      </div>
    </Provider>
  );
}

export default App;