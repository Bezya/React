import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import NavigationItem from './navigationItem';
import Logout from './buttonLogout';

export default class Navigation extends Component{

	render(){
		return(
				<Nav pullRight>
					<NavigationItem link = '/gallery' name = 'Gallery'/>
					<NavigationItem link = '/about'name = 'About user'/>
					<Logout link = '/login' name = 'Logout' />
				</Nav>
		)
	}
}

/*<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal">Auto Gallery</h5>

        <nav class="my-2 my-md-0 mr-md-3  hide">
            <a class="p-2 text-dark">Gallery</a>
            <a class="p-2 text-dark">About user</a>
            <a class="btn btn-outline-primary">Logout</a>
        </nav>
</div>*/