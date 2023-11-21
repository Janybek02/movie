import React from 'react';
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { setUpStore } from './store/store';
import './styles/reset.css'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setUpStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>


);

