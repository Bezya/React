import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const NavigationItem = (props) => {
	const {name, link} = props

	return(
		<Link to={link}>
			<Button bsStyle="link">{name}</Button>
		</Link>
		)
}

export default NavigationItem;