import React, {Component, Fragment} from 'react';
import { withStyles} from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import styles from '../styles/CreateForm';

import ListAdder from './ListAdder';

class CreateForm extends Component{
    state = {
        formName: "",
        language: "",
        questions: [], 
        questionsIndex: -1
    };
    onOptionChange = (index, event) => {
        let question = JSON.parse(this.state.questions[this.state.questionsIndex]);
        let options = question.questionOptions.split(',');
        options[index] = event.target.value;
        question.questionOptions = options.join();
        let questions = [...this.state.questions];
        questions[this.state.questionsIndex] = JSON.stringify(question);
        this.setState({
            questions
        });
        
    }
    onAddElementToList = () => {
        let question = JSON.parse(this.state.questions[this.state.questionsIndex]);
        if(question.questionOptions === ""){
            question.questionOptions = "Default";
        }else{
            question.questionOptions += ",Default";
        }
        let questions = [...this.state.questions];
        questions[this.state.questionsIndex] = JSON.stringify(question);
        this.setState({
            questions
        });
    }
    removeElementFromOptions = (index) => {
        let question = JSON.parse(this.state.questions[this.state.questionsIndex]);
        let questionOptions = question.questionOptions.split(',');
        if(
            (this.state.questionType !== 'multiple choice: radio with text box option' &&
            this.state.questionType !== "multiple choice: checkbox with text box option") ||
            index !== 0
        ){
            questionOptions.splice(index, 1);
            question.questionOptions = questionOptions.join(',');

            let questions = [...this.state.questions];
            questions[this.state.questionsIndex] = JSON.stringify(question);
            this.setState({
                questions
            });
        }
    }
    onChangeFieldHandler = (name, event)=>{
        this.setState({
            [name]: event.target.value
        });
    }
    onChangeQuestionHandler = (name, event) =>{
        let question = JSON.parse(this.state.questions[this.state.questionsIndex]);
        question = {
            ...question,
            [name]: event.target.value
        };
        if(name === "questionType"){
            
            let value = event.target.value;
            if(value === "multiple choice: radio with text box option" || value === "multiple choice: checkbox with text box option"){
                question.questionOptions = "Other";
            }else{
                question.questionOptions = "";
            }
        }

        let questions = [...this.state.questions];
        questions[this.state.questionsIndex] = JSON.stringify(question);
        this.setState({
            questions
        });
    }
    onCreateFormHandler = ()=>{
        if(this.state.questionsIndex + 1 === this.state.questions.length){
            let question = {
                questionNumber: "",
                questionText: "",
                questionType: "",
                questionOptions: ""
            };
            
            this.setState({
                questions: [JSON.stringify(question)],
                questionsIndex: this.state.questionsIndex + 1
            });
            console.log({
                ...this.states,
                questions: [JSON.stringify(question)],
                questionsIndex: this.state.questionsIndex + 1
            })
        }else{
            this.setState({
                questionsIndex: this.state.questionsIndex + 1
            });
            console.log({
                ...this.states,
                questionsIndex: this.state.questionsIndex + 1
            })
        }
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
            if(this.state.questionsIndex === -1 && 
                this.state.questionsIndex + 1 === this.state.questions.length){
                let question = {
                    questionNumber: "",
                    questionText: "",
                    questionType: "",
                    questionOptions: ""
                };
                
                this.setState({
                    questions: [JSON.stringify(question)],
                    questionsIndex: this.state.questionsIndex + 1
                });
                console.log({
                    ...this.states,
                    questions: [JSON.stringify(question)],
                    questionsIndex: this.state.questionsIndex + 1
                })
            }else if(this.state.questionsIndex + 1 === this.state.questions.length){
                let question = JSON.parse(this.state.questions[this.state.questionsIndex]);
                let valid = question.questionNumber !== "" && question.questionText !== "" && question.questionType !== "";
                
                if(question.questionType === "multiple choice: radio with text box option" || question.questionType=== "multiple choice: checkbox with text box option"){
                    if (question.questionOptions === "Other"){
                        valid = false;
                    }
                }else if(question.questionType === "multiple choice: checkbox" || question.questionType === "multiple choice: radio" ){
                    if (question.questionOptions === ""){
                        valid = false;
                    }
                }

                if(valid){
                    let question = {
                        questionNumber: "",
                        questionText: "",
                        questionType: "",
                        questionOptions: ""
                    };
                    this.setState({
                        questions: [...this.state.questions, JSON.stringify(question)],
                        questionsIndex: this.state.questionsIndex + 1
                    });
                    console.log({
                        ...this.state,
                        questions: [...this.state.questions, JSON.stringify(question)],
                        questionsIndex: this.state.questionsIndex + 1
                    });
                }
            }else{
                console.log({
                    ...this.state,
                    questionsIndex: this.state.questionsIndex + 1
                });
                this.setState({
                    questionsIndex: this.state.questionsIndex + 1
                });
            }
        }
    }
    pageButtonDisabled = () =>{
        let valid = false;
        if(this.state.questionsIndex !== -1){
            let question = JSON.parse(this.state.questions[this.state.questionsIndex]);
            valid = question.questionNumber !== "" && question.questionText !== "" && question.questionType !== "";
        
            if(question.questionType === "multiple choice: radio with text box option" || question.questionType=== "multiple choice: checkbox with text box option"){
                if (question.questionOptions === "Other"){
                    valid = false;
                }
            }else if(question.questionType === "multiple choice: checkbox" || question.questionType === "multiple choice: radio" ){
                if (question.questionOptions === ""){
                    valid = false;
                }
            }
        }
       
        return !valid;
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
            <Grid container style = {{marginBottom: 30, padding: 0, width: '100%'}}>
                <Grid item xs = {6} style = {{textAlign: 'left'}}>
                    <Button
                        variant = "contained" 
                        color = 'primary'
                        onClick = {this.onBackButtonHandler}
                    >
                        &lt; Back
                    </Button>
                </Grid>
                <Grid item xs = {6}  style = {{textAlign: 'right'}}>
                    <Button
                        variant = "contained" 
                        color = 'primary'
                        onClick = {this.onNextButtonHandler}
                        disabled = {this.state.questionsIndex === this.state.questions.length-1 && this.pageButtonDisabled()}
                    >
                        Next &gt;
                    </Button>
                </Grid>
            </Grid>
            <Grid container  style = {{marginBottom: 30, padding: 0, width: '100%'}}>
                <form style = {{margin: 'auto'}}>
                    <TextField
                        variant = "outlined"
                        id = "question-number"
                        label = "Question Number"
                        fullWidth
                        autoComplete = 'false'
                        value = {JSON.parse(this.state.questions[this.state.questionsIndex]).questionNumber}
                        onChange = {(e)=> this.onChangeQuestionHandler('questionNumber', e)}
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
                        autoComplete = 'false'
                        multiline
                        rows = "4"
                        value = {JSON.parse(this.state.questions[this.state.questionsIndex]).questionText}
                        onChange = {(e)=> this.onChangeQuestionHandler('questionText', e)}

                        style = {{
                            marginBottom: 20
                        }}
                    >
                    </TextField>
                    <FormControl fullWidth variant = "outlined">
                        <InputLabel style = {{backgroundColor: 'white'}}>Question Type</InputLabel>
                        <Select
                            value = {JSON.parse(this.state.questions[this.state.questionsIndex]).questionType}
                            onChange = {(e)=>this.onChangeQuestionHandler('questionType', e)}
                            variant = "outlined"
                        >
                            <MenuItem 
                                value = {"multiple choice: radio"}
                            >
                                Multiple Choice: Radio
                            </MenuItem>
                            <MenuItem 
                                value = {"multiple choice: radio with text box option"}
                            >
                                Multiple Choice: Radio with Textbox Option
                            </MenuItem>
                            <MenuItem 
                                value = {"multiple choice: checkbox"}
                            >
                                Multiple Choice: Checkbox
                            </MenuItem>
                            <MenuItem 
                                value = {"multiple choice: checkbox with text box option"}
                            >
                                Multiple Choice: Checkbox with Textbox Option
                            </MenuItem>
                            <MenuItem 
                                value = {"date"}
                            >
                                Date
                            </MenuItem>
                            <MenuItem 
                                value = {"text"}
                            >
                                Text
                            </MenuItem>
                        </Select>
                    </FormControl>
                </form>
            </Grid>
            {JSON.parse(this.state.questions[this.state.questionsIndex]).questionType === "multiple choice: radio" ||
            JSON.parse(this.state.questions[this.state.questionsIndex]).questionType === "multiple choice: radio with text box option" ||
            JSON.parse(this.state.questions[this.state.questionsIndex]).questionType === "multiple choice: checkbox with text box option" ||
            JSON.parse(this.state.questions[this.state.questionsIndex]).questionType === "multiple choice: checkbox"? 
                <ListAdder
                    options = {JSON.parse(this.state.questions[this.state.questionsIndex]).questionOptions === ""? []:
                                JSON.parse(this.state.questions[this.state.questionsIndex]).questionOptions.split(",")
                                }
                    removeElement = {this.removeElementFromOptions}
                    addElement = {this.onAddElementToList}
                    hasOther = {JSON.parse(this.state.questions[this.state.questionsIndex]).questionType === "multiple choice: radio with text box option" ||
                                JSON.parse(this.state.questions[this.state.questionsIndex]).questionType === "multiple choice: checkbox with text box option"
                                }
                    changeOption = {this.onOptionChange}
                ></ListAdder> :""
            }
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