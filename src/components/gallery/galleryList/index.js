import React, {Component} from 'react';
import PropTypes from 'prop-types';

import GalleryElem from './GalleryElem';
import { Grid, Col, Row } from 'react-bootstrap';

export default class GalleryList extends Component{
	constructor(props) {
		super(props)
		
		this.state = {
			
		}
	}

	dateSorting(a,b){
		const { dateOrder } = this.props;

		if (dateOrder === 'new') {
			return a.date > b.date ? 1 : -1;
		}
		return a.date > b.date ? -1 : 1
	}

	/*sortingConfig = {
		"A": (a, b) => a.name > b.name ? 1 : -1,
		"Z": (a, b) => a.name < b.name ? 1 : -1,
		"New": (a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1,
		"Old": (a, b) => new Date(a.date) > new Date(b.date) ? 1 : -1
	};*/

	render(){
		let { cars } = this.props

		//if
		 //this.props.cars.sort((a,b) => this.dateSorting(a,b))
		 const galleryItems = cars.map(galleryElem => 
		<Col key ={galleryElem.id} xs={6} md={4}>
			<GalleryElem 
				galleryElem  = { galleryElem }
				onDelete = { this.props.onDelete}
				handleUpdate = {this.props.handleUpdate}
			/>
		</Col>)

		return (
			<Grid>
				<div className="album py-5 bg-light">
					<div className="container">
						<Row>
							{ galleryItems }
						</Row>
					</div>
				</div>
			</Grid>
		)
	}
}

GalleryList.propTypes = {
	onDelete: PropTypes.func.isRequired
}

