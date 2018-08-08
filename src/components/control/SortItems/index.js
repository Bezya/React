import React, {Component} from 'react';
import {ControlLabel, FormControl, Col, Row} from 'react-bootstrap';

export default class GallerySorting extends Component{
	constructor(props){
		super(props)

		this.state = {
		}
	}
	render(){
		return(
			<Row>
			<Col xs={12} md={6} >
				<ControlLabel>Name sorting</ControlLabel>
				<FormControl componentClass="select" placeholder="select" onChange = {this.props.setNameOrder}>
					<option value='a'>A-Z</option>
					<option value='z'>Z-A</option>
				</FormControl>
				</Col>
				<Col xs={12} md={6} >
				<ControlLabel>Date sorting</ControlLabel>
				<FormControl componentClass="select" placeholder="select" onChange = {this.props.setDateOrder}>
					<option value="new">New-Old</option>
					<option value="old">Old-New</option>
				</FormControl>
			</Col>
			</Row>
		)
	}
}