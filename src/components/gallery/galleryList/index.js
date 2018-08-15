import React, {Component} from 'react';
import GalleryElem from '../galleryElem';
//import {cars} from '../../../db';
import { Grid, Col, Row } from 'react-bootstrap';

export default class GalleryList extends Component{
	constructor(props) {
		super(props)
		
		this.state = {
			
		}
	}

	dateSorting(a,b){
		const { dateOrder } = this.props;
		console.log(dateOrder)
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
		const galleryItems = this.props.cars.sort((a,b) => this.dateSorting(a,b)).map(galleryElem => 
		<Col key ={galleryElem.id} xs={6} md={4}>
			<GalleryElem key = {galleryElem.id} galleryElem  = {galleryElem}/>
		</Col>)

		return (
			<Grid>
				<div className="album py-5 bg-light">
					<div className="container">
						<Row>
							{galleryItems}
						</Row>
					</div>
				</div>
			</Grid>
		)
	}
}

/*<div class="album py-5 bg-light">
                <div class="container">
                    <div class="row js-gallery" id="gallery"></div>
                </div>
            </div>*/
