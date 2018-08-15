import React, {Component} from 'react';
//import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

export default class AboutUser extends Component{
	static propTypes = {
	};

	state = {
		email: '',
		password: ''
	};
	
	render(){
		return (
			<div className="container"><br/>
            <h3>About User</h3><br/>
            <div className="row">
                <div className="col-lg-6">
                    <label>Login</label>
                    <input type="email" className="form-control disable"placeholder="email@mail.com"/>
                </div>
                <div className="col-lg-offset-3 col-lg-6">
                    <label>Password</label>
                    <div className="input-group">
                        <input type="password" className="form-control disable" placeholder="password"/>
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Show password</button>
                        </span>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-12">
                    <button type="button" className="btn btn-primary btn-block">Back to gallery</button>
                </div>
            </div>
        </div>
			)
	}
}