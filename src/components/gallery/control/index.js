import React from 'react';

import CreateItem from '../control/CreateItem';
import GallerySorting from '../control/SortItems';
//import { Jumbotron, Row } from 'react-bootstrap'; 

import '../../../style/App.css';

const SortAndCreate = (props) => {
	return(
		<div className="jumbotron text-center">
			<div className="container">
				<h1 className="jumbotron-heading">Create your own gallery</h1>
				<p className="lead text-muted"></p>
				<div className="row">
					<CreateItem {...props}/>
				</div>
				<div className="row">
					<GallerySorting {...props}/>
				</div>
			</div>
		</div>
	)
}

export default SortAndCreate;

