import React from 'react';
import ReactDOM from 'react-dom/client'; // react-dom/client import ediliyor
import './index.css'; // Stil dosyası import
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// React 18'de createRoot kullanılıyor
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
