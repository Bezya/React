import React, {Component} from 'react';
//import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';

export default class GalleryElem extends Component{
	static propTypes = {
		galleryElem: PropTypes.shape({
				url: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				id: PropTypes.number.isRequired,
				description: PropTypes.string.isRequired,
				date: PropTypes.number.isRequired,
			}).isRequired
	}

	static defaultProps = {
		galleryElem: {
			url: '',
			name: '',
			id: null,
			description: '',
			date: null,
		}
	}
	
	transformUrl = str => (str.indexOf('http://') !== 0) ? `http://${str}` : `${str}`;

	render(){
		const {galleryElem}  = this.props;

		
		return (
				<div>
					<img src={ this.transformUrl( galleryElem.url )}/>
					<div>{galleryElem.name}</div>
					<div>{galleryElem.description}</div>
					<div>{galleryElem.date}</div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
		)
	}
}