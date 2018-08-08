import React, {Component} from 'react';
import CreateItem from '../control/CreateItem';
import GallerySorting from '../control/SortItems';

const SortAndCreate = (props) => {
	return(
		<div>

				<CreateItem/>

				<GallerySorting {...props}/>

		</div>
	)
}

export default SortAndCreate;