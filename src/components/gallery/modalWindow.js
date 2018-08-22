import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

export default class ModalWindow extends Component{
	constructor(props){
		super(props)

		this.state = {
			car: {... props.car},
		}
	}

	handleChange = (event, field) => {
    this.setState({
			car: {...this.state.car, [field]: event.target.value}
    });
  }

	render(){
		let { car }  = this.state
		return(
			<ReactModal isOpen={true}
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
							 value={car.url}
							 onChange={(e)=>this.handleChange(e,'url')}
						 />
					 </FormGroup>
					 <FormGroup bsSize="large">
						 <ControlLabel className = "inputName">Сar model</ControlLabel>
						 <FormControl
							 value={car.name}
							 onChange={(e) => this.handleChange(e, 'name')}
							 type="text"
						 />
					 </FormGroup>
					 <FormGroup bsSize="large">
						 <ControlLabel className = "inputName">Description</ControlLabel>
						 <FormControl
							 value={car.text}
							 onChange={(e) => this.handleChange(e, 'text')}
							 type="text"
						 />
					 </FormGroup>
				 </div>
				 <Modal.Footer>
					 <Button onClick={this.props.closeModal}>Close</Button>
					 <Button onClick={() => this.props.onSave(this.state.car)}>Save</Button>
				 </Modal.Footer>
        </ReactModal>
		)
	}
}