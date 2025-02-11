import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderDogs = (containerId, history, name) => {
  ReactDOM.render(
    <App history={history} name={name} />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};

window.unmountDogs = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Dogs-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}