import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { InputLabel } from '@material-ui/core';

import styles from '../styles/CreateForm';

class CreateForm extends Component{
    state = {
        formName: "",
        questions: [], 
        quetionsIndex: -1
    };
    addHandler = (name, e) => {

    }

    render(){
        return(
            <div className = {this.props.classes.root}>
                <Grid 
                    container 
                    spacing = {3}
                    alignItems = "center"
                    justify = "center"
                >
                    <Grid item xs={12}>
                        <FormControl>
                            <InputLabel 
                                htmlFor = "formName"
                            >
                                hello world
                            </InputLabel>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(CreateForm);