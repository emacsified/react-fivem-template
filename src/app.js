import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import App from 'containers/App';

import WindowListener from 'containers/WindowListener';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <WindowListener>
      <App />
    </WindowListener>,
    MOUNT_NODE,
  );
};
if (module.hot) {
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
