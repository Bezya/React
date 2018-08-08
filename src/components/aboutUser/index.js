import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

export default class AboutUser extends Component{
	static propTypes = {
	};

	state = {
		email: '',
		password: ''
	};
	
	render(){
		return (
			<div>
				<Form inline>
					<FormGroup controlId="formInlineName">
						<ControlLabel>Name</ControlLabel>{' '}
						<FormControl type="text" placeholder="Jane Doe" />
					</FormGroup>{' '}
					<FormGroup controlId="formInlineEmail">
						<ControlLabel>Email</ControlLabel>{' '}
						<FormControl type="email" placeholder="jane.doe@example.com" />
					</FormGroup>{' '}
					<Button type="submit">Send invitation</Button>
				</Form>
				<div>
						<Button>Back to gallery</Button>
				</div>
			</div>
			)
	}
}