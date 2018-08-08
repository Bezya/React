import React, {Component} from 'react';
import GalleryElem from '../galleryElem';
import SortAndCreate from '../../control';
//import {cars} from '../../../db';
import { Grid, Col, Row } from 'react-bootstrap';

export default class GalleryList extends Component{
	constructor(props) {
		super(props)
		this.state = {
			nameOrder: '',
			dateOrder: 'new'
		}
	}

	setNameOrder(ev){
		console.log(ev.target.value);
		this.setState({nameOrder: ev})
	}

	setDateOrder(ev){
		console.log(ev.target.value);
		this.setState({dateOrder: ev});
	}

	dateSorting(a,b){
		const { dateOrder } = this.state;
		console.log(dateOrder)
		if (dateOrder === 'new') {
			return a.date > b.date ? 1 : -1;
		}
		return b.date > a.date ? 1 : -1
	}

	render(){
		const galleryItems = this.props.cars.sort((a,b) => this.dateSorting(a,b)).map(galleryElem => 
		<Col key ={galleryElem.id} xs={6} md={4}>
			<GalleryElem key = {galleryElem.id} galleryElem  = {galleryElem}/>
		</Col>)

		return (<Grid>
			<SortAndCreate setNameOrder = {(e) => this.setNameOrder(e)} setDateOrder = {(e) => this.setDateOrder(e)}/>
			<Row ></Row>
			<Row>
				{galleryItems}
			</Row>
		</Grid>
		)
	}
}