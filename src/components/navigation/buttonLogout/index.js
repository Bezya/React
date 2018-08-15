import React from 'react';
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';

const Logout = (props) => {
	const {name, link, onClick} = props

	return(
		 <Link to={link}>
		 	<Button className = "btn btn-outline-primary" type="submit" onClick = {() => onClick()}>{name}</Button>
		 </Link>
	)
}

export default Logout;