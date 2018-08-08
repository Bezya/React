import React, {Component} from 'react';
import GalleryList from '../gallery/galleryList';
import {cars} from '../../db';
//import SortAndCreate from '../control/index';

export default class Gallery extends Component{
	render(){
		return (
			<div>
				<GalleryList cars = {cars}/>
			</div>
		)
	}
}