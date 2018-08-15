import React, {Component} from 'react';
//import {findDOMNode} from 'react-dom';
import Moment from 'moment';
import PropTypes from 'prop-types';
//import {Col, Thumbnail, Button} from 'react-bootstrap'; 


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

	transformName = name => `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`;

  transformDescription = str => (str.length > 15) ? `${str.substring(0, 15)}...` : str;

  getFormattedDate = date => Moment(date).format('YYYY/MM/DD');

	render(){
		const {galleryElem}  = this.props;

		return (
			<div className="gallery-item">
				<div className="card mb-4 box-shadow">
					<img className="card-img-top" 
							 data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
							alt={galleryElem.name} 
							src={ this.transformUrl( galleryElem.url )} 
							style={{height: '225px',
											width: '100%',
											display: 'block'}}/>
					<div className="card-body">
							<div className="text-muted">{galleryElem.name}</div>
							<p className="card-text">{galleryElem.description}</p>
							<div className="d-flex justify-content-between align-items-center">
									<div className="btn-group">
											<button type="button" className="btn btn-outline-secondary">View</button>
											<button type="button" className="btn btn-outline-secondary">Edit</button>
									</div>
									<button className="btn btn-danger">Delete</button>
									<small className="text-muted">{  this.getFormattedDate(galleryElem.date) } </small>
							</div>
					</div>
				</div>
			</div>
		)
	}
}
