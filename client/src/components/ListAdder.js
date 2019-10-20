// JavaScript source code
import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody  from '@material-ui/core/TableBody';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TableCell  from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
class ListAdder extends Component {
    createTableCells = ()=>{
        const tableCells = this.props.options.map((option, index)=>
            <TableRow 
                key = {index}
            >
                <TableCell
                    align = "center"
                >
                    {option === "Other" && this.props.hasOther? option :
                        <form style = {{width: "100%"}}>
                            <TextField
                                variant = "outlined"
                                label = "Option Value"
                                fullWidth   
                                onChange = {(e)=>this.props.changeOption(index, e)}
                                value = {option === "Default"? "": option}
                                style = {{}}
                            >

                            </TextField>
                        </form>
                    }
                    
                </TableCell>
                <TableCell
                    align = "center"
                >
                    <form style = {{width: "100%"}}>
                        
                        <Button
                            variant = "contained"
                            color = 'secondary'
                            onClick = {()=>this.props.removeElement(index)}
                            style = {{}}
                            disabled = {option === "Other" && this.props.hasOther}
                            fullWidth
                        >
                            Delete
                        </Button>
                    </form>
                    
                </TableCell>
            </TableRow>
        );
        return tableCells;
    }
    render(){
        return(
            <Grid container style = {{marginBottom: 30, padding: 0, width: '100%'}}>
                <Grid item xs={12}>
                    <Table>
                        <TableBody>
                            {this.createTableCells()}
                        </TableBody>
                    </Table>
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        variant = "contained" 
                        color = 'primary'
                        onClick = {this.props.addElement}
                        style = {{width: '100%'}}
                    >
                        Add Item
                    </Button>
                </Grid>
            </Grid>
        );
    }
}
export default ListAdder;