import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {cars} from './db';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/style/App.css';

ReactDOM.render(<App gallery = {cars} />, document.getElementById('root'));
registerServiceWorker();
