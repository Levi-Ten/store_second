import React from 'react';
import ReactDOM from 'react-dom/client';
import Store from './store/Store';
import "./scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <p>Hello</p>
   {/* <Store></Store> */}
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Store></Store>
//   </React.StrictMode>
// );


