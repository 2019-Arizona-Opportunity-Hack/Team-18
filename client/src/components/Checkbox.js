import React, {Component, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
//import { withStyles } from '@material-ui/core/styles';
//import styles from '../styles/checkbox';

class Checkbox extends Component{
    /*
    render(){
        return(
            <div>
                
            </div>
        );
    }
    */
    state = {
        numberOfQuestions: 1,
        checkBoxFields: []
    };
    

    initializeFunction = () => {
//	this.addNewCheckBox();
	

    }
    
    //handler for adding a new check box option
    addNewCheckBox = checkFieldString => {
        this.setState({
            numberOfQuestions: this.state.numberOfQuestions + 1,
	    checkBoxFields: [...this.state.checkBoxFields, checkFieldString]
        });
	console.log("Number: " + this.state.numberOfQuestions);
	
	return this.createTextField;
    }

    createTextField = () => {
	
	let checkBoxList = [];
	for(let i = 0; i < this.state.numberOfQuestions; i++){
	    
	    checkBoxList.push(<div> <input type="text" key = {i}value={this.state.checkBoxFields[i]} onChange={(e) =>this.handleChange(e.target.value)} /> </div>);
	}
	return checkBoxList;
	
    }

    
    
    handleChange(value) {
        this.setState({
            value
        });
    }

    submitQuestion = () => {
	console.log("submit question button pressed");
	let sendArray = this.state.checkBoxFields;
	
	//send to server
    }
    render() {
        return (
		<div>
		<Grid container spacing={2}>
		<Grid item xs={12}>
		{
			<input type="submit" value="Add choice" onClick={() => this.addNewCheckBox()} />
		}
	    </Grid>
		<Grid item xs={12}>
		{
		    "hello"
		}
	    </Grid>
		</Grid>

		{this.createTextField()}

		<input type="submit" value="Submit Question" onClick={() => this.submitQuestion()} />
		</div>
        );
    }
    /*
    numberOfQuestions = 0;
    
    toggleCheckbox = label => {
	if (this.selectedCheckboxes.has(label))
	{
	    this.selectedCheckboxes.delete(
    handleFormSubmit = formSubmitEvent => {
	formSubmitEvent.preventDefault();

	for (const checkbox of this.selectedCheckboxes) {
	    console.log(checkbox, 'is selected.');
	}
    }
        
    createCheckBox = label => (
	    <Checkbox
	label = {""}
	handleCheckboxChange = {this.toggleCheckbox}
	key = {label}
	    />
    )
    
    */
}
export default Checkbox;
