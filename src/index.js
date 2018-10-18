import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
// import HomeIndex from './HomeIndex/index.jsx'


import './index.css';

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }
// ReactDOM.render(
//   <App />,
//   document.getElementById('root'));

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => render(App))
}
