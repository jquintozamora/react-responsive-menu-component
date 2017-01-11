import { AppContainer } from 'react-hot-loader'; // required  
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App.jsx'; // App

import css from './../stylesheets/main.css';

// Loading polyfill only when needed: https://philipwalton.com/articles/loading-polyfills-only-when-needed/
function browserSupportsAllFeatures() {
  return window.Promise;
}
function loadScript(src, done) {
  let js = document.createElement('script');
  js.src = src;
  js.onload = function () {
    done();
  };
  js.onerror = function () {
    done(new Error('Failed to load script ' + src));
  };
  document.head.appendChild(js);
}
if (browserSupportsAllFeatures()) {
  main()
} else {
  loadScript('https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise', main);
}
function main() {
  renderWithHotReload(App);

  // Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./containers/App.jsx', () => {
      const App = require('./containers/App.jsx').default;
      renderWithHotReload(App);
    });
  }
}
function renderWithHotReload(App) {
  render(
    <App />
    , document.getElementById('starter')
  );
}