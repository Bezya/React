import React, {Component} from 'react';
//import {Navbar, Nav} from 'react-bootstrap';
import NavigationItem from './navigationItem';
import Logout from './buttonLogout';

export default class Navigation extends Component{

	render(){
		return(
			<div className ="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
				<h5 className="my-0 mr-md-auto font-weight-normal">Auto Gallery</h5>
				<div className = 'my-2 my-md-0 mr-md-3'>
					<NavigationItem link = '/gallery' name = 'Gallery'/>
					<NavigationItem link = '/about'name = 'About user'/>
					<Logout link = '/login' onClick = { () => this.props.setUser(null) } name = 'Logout' />
				</div>
			</div>
		)
	}
}