import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './components/navigation';
import Gallery from './components/gallery';
import AboutUser from './components/aboutUser';
import LoginForm from './components/loginForm';
//import { withRouter } from 'react-router'

export default class App extends Component {
	constructor(props){
		super(props)

		this.state = {
			user: null
		}
	}

	componentWillMount(){
		
	}

	componentDidMount(){//запрос на сервер о залогинивании
		let user = localStorage.getItem('user');
		
		if(user) {
			this.setState({
				user: JSON.parse(user)
			})
		}	
	}
	
	setUser(user){
		this.setState({ user: user });
		if (!user) {
			localStorage.removeItem('user')
		}
	}

  render() {
		const { user } = this.state;
    return (
      <div className="App">
				<Router>
					{ !user ?
							<LoginForm setUser = {(user) => this.setUser(user)}/>
							:
							<div>
								<Navigation setUser = { (user) => this.setUser(null)}/>
								<Route exact path="/gallery" component={Gallery} />
								<Route path="/about" component={AboutUser} />
							</div>
					}
				</Router>
			</div>
    );
  }
}