import React, {Component} from 'react';

export default class ErrorMsg extends Component{
	constructor(props){
		super(props)

		this.state = {
			msg: '',
		}
	}

	render(){
		return(
			<div className="alert alert-danger" role="alert">msg</div>
		)
	}
}