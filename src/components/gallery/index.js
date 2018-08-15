import React, {Component} from 'react';
import SortAndCreate from '../control';
import GalleryList from '../gallery/galleryList';
import { Grid, Col, Row } from 'react-bootstrap';


import {cars} from '../../db';
//import SortAndCreate from '../control/index';

export default class Gallery extends Component{
	constructor(props){
		super(props)

		this.state = {
			cars: cars,
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

	render(){
		 const { nameOrder, dateOrder } = this.state;

		return (
				<div >
					<SortAndCreate setNameOrder = {(e) => this.setNameOrder(e)} setDateOrder = {(e) => this.setDateOrder(e)}/>

					<GalleryList cars = {this.state.cars} nameOrder={nameOrder} dateOrder={dateOrder}/>
				</div>

		)
	}
}