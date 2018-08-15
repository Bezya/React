import React, {Component} from 'react';

export default class ErrorMsg extends Component{
	constructor(props){
		super(props)

		this.state = {
			msg: '',
		}
	}

	getErrorMsg(errorMsg){
		this.setState({ msg: errorMsg })
	}
	
	render(){
		return(
			<Alert bsStyle="danger" role="alert">{this.getErrorMsg(errorMsg)}
			</Alert>
		)
	}
}