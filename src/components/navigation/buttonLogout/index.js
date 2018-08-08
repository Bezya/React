import React from 'react';
import { Link } from "react-router-dom";

const Logout = (props) => {
	const {name, link} = props

	return(
		 <Link to={link}>
		 	<button className = "btn btn-outline-primary" type="submit">{name}</button>
		 </Link>
	)
}

export default Logout;