import React, {Component} from 'react';
import Moment from 'react-moment';
import {ControlLabel, FormControl, Col, Row} from 'react-bootstrap';

export default class GallerySorting extends Component{
	constructor(props){
		super(props)

		this.state = {
		}
	}
	render(){
		return(
			<div className="btn-group text-center">
			<Col xs={6} md={6} >
				<ControlLabel>Name sorting</ControlLabel>
				<FormControl componentClass="select" placeholder="select" onChange = {this.props.setNameOrder}>
					<option value='a'>A-Z</option>
					<option value='z'>Z-A</option>
				</FormControl>
				</Col>
				<Col xs={6} md={6} >
				<ControlLabel>Date sorting</ControlLabel>
				<FormControl componentClass="select" placeholder="select" onChange = {this.props.setDateOrder}>
					<option value="new">New-Old</option>
					<option value="old">Old-New</option>
				</FormControl>
			</Col>
			</div>
		)
	}
}