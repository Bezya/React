import React from 'react';
import { Link } from "react-router-dom";

const Logout = (props) => {
	const {name, link} = props

	return(
		 <Link to={link}>
		 <button>{name}</button>
		 </Link>
	)
}

export default Logout;