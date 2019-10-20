import {React, Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
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
            <div className = {classes.root}>
                <Grid 
                    container 
                    spacing = {3}
                    alignItems = "center"
                    justify = "center"
                >
                    <FormControl>
                        <InputLabel 
                            htmlFor = "formName"
                        >
                            
                        </InputLabel>
                    </FormControl>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(CreateForm);