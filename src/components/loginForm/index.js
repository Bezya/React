import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import { users } from '../../db';
import '../loginForm/loginForm.css';


export default class Login extends Component{
	constructor(props){
		super(props)

		this.state = {
			login: '',
			password: ''
		}
	}

	getValidationState() {
    const length = this.state.value.length;
			if (length > 10) return 'success';
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

	onClickSubmit(ev){
		ev.preventDefault();
		const { login, password } = this.state;
		const { setUser } = this.props;

		let user = users.find( user => login === user.login && password === user.password)

		if(user) {
			localStorage.setItem('user', JSON.stringify(user));
			setUser(user);
		}
		console.log(login, password);
	}

	render() {
    return (
      <div className="Login">
				<h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="login" bsSize="large">
            <ControlLabel className = "inputName">Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.login}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel className = "inputName">Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button className = "btn btn-primary"
            block
            bsSize="large"
            //disabled={!this.validateForm()}
						type="submit"
						onClick = {(e) => this.onClickSubmit(e)}
          >
            Sign in
          </Button>
        </form>
      </div>
    );
  }
}
