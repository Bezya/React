import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/navigation';
import Gallery from './components/gallery';
import AboutUser from './components/aboutUser';
import LoginForm from './components/loginForm';


import '../src/style/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
			<Router>
				<div>
					<Navigation/>

					<Route exact path="/gallery" component={Gallery} />
					<Route path="/about" component={AboutUser} />
					<Route path="/login" component={LoginForm} />
				</div>
      </Router>
			</div>
    );
  }
}