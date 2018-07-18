import React, {Component} from 'react';
import NavigationItem from './navigationItem';
import Logout from './buttonLogout';

export default class Navigation extends Component{

	render(){
		return(
			<div>
				<NavigationItem link = '/gallery' name = 'Gallery'/>
				<NavigationItem link = '/about'name = 'About user'/>
				<Logout link = '/login' name = 'Logout' />
			</div>
		)
	}
}