import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "../src/Redux/Store"
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const data = [9, 8, 7,3, 5, 6]
export const Context = createContext()
root.render(
  <React.StrictMode>
    <Context.Provider value={data}>
      <Provider store={store}>
      <App />
      </Provider>
    </Context.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
