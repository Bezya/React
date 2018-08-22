import React, {Component} from 'react';

import SortAndCreate from './control';
import GalleryList from '../gallery/galleryList';
//import { Grid, Col, Row } from 'react-bootstrap';


import { cars } from '../../db';
//import SortAndCreate from '../control/index';

export default class Gallery extends Component{
	constructor(props){
		super(props)

		this.state = {
			cars: cars,
			nameOrder: '',
			dateOrder: '',
		}
	}

	setNameOrder(ev){
		this.setState({nameOrder: ev.target.value})
	}

	setDateOrder(ev){
		console.log(ev.target.value);
		this.setState({dateOrder: ev.target.value});
	}

	handleUpdate(car){
		let cars = this.state.cars.map(item => {
			return item.id === car.id ? car : item
		})

		this.setState({ cars } );
	}

	handleDelete(id){
		let cars = this.state.cars.filter(item => item.id !== id);

		this.setState({ cars } );
	}

	render(){
		 const { nameOrder, dateOrder } = this.state;

		return (
				<div >

					<SortAndCreate setNameOrder = {(e) => this.setNameOrder(e)} setDateOrder = {(e) => this.setDateOrder(e)}/>
					<GalleryList 
							cars = {this.state.cars} 
							nameOrder={nameOrder} 
							dateOrder={dateOrder}
							onDelete ={(id) => this.handleDelete(id)}
							handleUpdate ={(car) => this.handleUpdate(car)}
						/>
					
				</div>

		)
	}
}