import React from 'react';
import { Link } from "react-router-dom";

const NavigationItem = (props) => {
	const {name, link} = props

	return(
		<Link to={link}>{name}</Link>
		)
}

export default NavigationItem;