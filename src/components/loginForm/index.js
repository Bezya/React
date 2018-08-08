import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

export default class Login extends Component{
	constructor(props){
		super(props)

		this.state = {
			email: '',
			password: ''
		}
	}

	render(){
		return(
			<div>
				<div>
					SING IN
				</div>
				<form >
					<div>USERNAME or E-MAIL:</div>    
						<input value = {this.state.email}/>
					<div>PASSWORD:</div> 
						<input value = {this.state.password}/>
					<div>
						<Button bsStyle="primary">LOG IN</Button>
						<a>Remember me</a>
					</div>
				</form>
			</div>
		)
	}
}

/*
<form className="form-signin">
		<h1 className="h3 mb-3 font-weight-normal">Пожалуйста войдите</h1>
		<label for="inputEmail" className="sr-only">Email</label>
		<input type="email" className="form-control" required="true" placeholder="email@mail.com" autofocus="" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;"
				autocomplete="off">
		<div className="mb-3"></div>
		<label for="inputPassword" className="sr-only">Пароль</label>
		<input type="password" id="inputPassword" class="form-control" required="true" placeholder="password" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;"
				autocomplete="off">
		<div className="mb-3"></div>
		<button className="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
</form>*/
