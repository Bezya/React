import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import {Modal, FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap";

const customStyles = {

  content : {
    top           : '50%',
    left          : '50%',
    right         : 'auto',
    bottom        : 'auto',
    marginRight   : '-50%',
    transform      : 'translate(-50%, -50%)'
  }
};

export default class CreateItem extends Component{
	constructor(props, context) {
		super(props, context);
		
		this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
			url: "",
			name: "",
			text: "",
			date: new Date()
		}

	}

	handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
		debugger
	
    this.setState({ show: true });
  }

	handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
	}

	render(){
		return(
			<div>
					<Button onClick={this.handleShow}>Create gallery element</Button>

					<ReactModal isOpen={this.state.show}
					 contentLabel="Minimal Modal Example"
					 style={customStyles}
					 >
				 <div>
					 <h4>Fill the fields</h4>
					 <FormGroup bsSize="large">
						 <ControlLabel className = "inputName">Photo link</ControlLabel>
						 <FormControl
							 autoFocus
							 type="text"
							 value={this.state.url}
							 onChange={this.handleChange}
						 />
					 </FormGroup>
					 <FormGroup bsSize="large">
						 <ControlLabel className = "inputName">Сar model</ControlLabel>
						 <FormControl
							 value={this.state.name}
							 onChange={this.handleChange}
							 type="text"
						 />
					 </FormGroup>
					 <FormGroup bsSize="large">
						 <ControlLabel className = "inputName">Description</ControlLabel>
						 <FormControl
							 value={this.state.text}
							 onChange={this.handleChange}
							 type="text"
						 />
					 </FormGroup>
				 </div>
				 <Modal.Footer>
					 <Button onClick={this.handleClose}>Close</Button>
					 <Button onClick={this.createItem}>Save</Button>
				 </Modal.Footer>
        </ReactModal>
		</div>
		)
	}
}

