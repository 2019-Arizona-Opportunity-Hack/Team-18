import React, {Component, Fragment} from 'react';
import { withStyles} from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import styles from '../styles/CreateForm';

class CreateForm extends Component{
    state = {
        formName: "",
        language: "",
        questions: [], 
        questionsIndex: -1,
        questionNumber: "",
        questionType: ""
    };
    addHandler = (name, e) => {
        
    }
    onChangeFieldHandler = (name, event)=>{
        this.setState({
            [name]: event.target.value
        });
    }
    onCreateFormHandler = ()=>{
        console.log(this.state.formName);
        console.log(this.state.questionsIndex);
        this.setState({
            questionsIndex: this.state.questionsIndex + 1
        });
    }
    onBackButtonHandler = ()=>{
        if(this.state.questionsIndex > -1) {
            this.setState({
                questionsIndex: this.state.questionsIndex - 1
            });
        }
    }
    onNextButtonHandler = () =>{
        if(this.state.questionsIndex < this.state.questions.length){
            this.setState({
                questionsIndex: this.state.questionsIndex + 1
            });
        }
    }
    firstPage = (classes) => (
        <Fragment>
            <Grid item xs = {12} width = "100%"  style = {{marginBottom: 30}}>
                <form>
                    <TextField
                        variant = "outlined"
                        id = "form-name"
                        label = "Form Name"
                        fullWidth
                        onChange = {(e) => this.onChangeFieldHandler('formName', e)}
                        value = {this.state.formName}
                        style = {{
                            marginBottom: 20
                        }}
                    >
                    </TextField>
                    <TextField
                        variant = "outlined"
                        id = "Language"
                        label = "Language"
                        fullWidth
                        value = {this.state.language}
                        onChange = {(e) => this.onChangeFieldHandler('language', e)}
                    >

                    </TextField>
                </form>
            </Grid>
            <Grid item xs = {12} width = "100%">
                <Button 
                    variant = "contained" 
                    color = 'primary'
                    onClick = {this.onCreateFormHandler}
                    className = {classes.button}
                    disabled = {this.state.formName === "" || this.state.language === ""}
                >
                    Create Form
                </Button>
            </Grid>
        </Fragment>
    );
    questionPage = () => (
        <Fragment>
            <Grid container xs = {12} style = {{marginBottom: 30, padding: 0}}>
                <Grid item xs = {6} justify = "flex-start" style = {{textAlign: 'left'}}>
                    <Button
                        variant = "contained" 
                        color = 'primary'
                        onClick = {this.onBackButtonHandler}
                    >
                        &lt; Back
                    </Button>
                </Grid>
                <Grid item xs = {6} justify = "flex-end" style = {{textAlign: 'right'}}>
                    <Button
                        variant = "contained" 
                        color = 'primary'
                        onClick = {this.onNextButtonHandler}
                        disabled = {this.state.questionsIndex === this.state.questions.length}
                    >
                        Next &gt;
                    </Button>
                </Grid>
            </Grid>
            <Grid container xs = {12} style = {{marginBottom: 30, padding: 0}}>
                <form style = {{margin: 'auto'}}>
                    <TextField
                        variant = "outlined"
                        id = "question-number"
                        label = "Question Number"
                        fullWidth
                        value = {this.state.questionNumber}
                        style = {{
                            marginBottom: 20
                        }}
                    >
                    </TextField>
                    <TextField
                        variant = "outlined"
                        id = "question-text"
                        label = "Question Text"
                        fullWidth
                        multiline
                        rows = "4"
                        value = {this.state.questionNumber}
                        style = {{
                            marginBottom: 20
                        }}
                    >
                    </TextField>
                </form>
            </Grid>
        </Fragment>
    );
    render(){
        
        const classes = this.props.classes;
        const page = this.state.questionsIndex === -1 ? this.firstPage(classes) : this.questionPage();
        return(
            <div className = {classes.root}>
                <Grid 
                    container 
                    spacing = {3}
                    alignItems = "center"
                    justify = "center"
                >
                    <Grid item xs={12} sm= {8}>
                        <Paper className = {classes.paper} elevation = {6}>
                            <Grid 
                                container 
                                alignItems = "center"
                                id = "tehGrid"
                                className = {classes.internalContainer}
                            >
                               {page}
                            </Grid>
                        </Paper>
                        
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(CreateForm);