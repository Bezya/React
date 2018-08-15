import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {cars} from './db';
import registerServiceWorker from './registerServiceWorker';

import '../src/style/App.css';

ReactDOM.render(<App gallery = {cars} />, document.getElementById('root'));
registerServiceWorker();

