import React from "react";
import { Grid, Paper, TextField, Button  } from "@material-ui/core";


export default function Addstaff () {
    const buttonStyle={ margin: '8px 0', backgroundColor: 'green' }
const Gridd={backgroundColor: 'teal', paddingTop: '10px', color: 'black'}
    return (
            <div className="containerA">
                <Grid>
                    <Grid align= 'center' style={Gridd}>
                        <h2><b><i>ADD STAFF</i></b></h2>
                        </Grid>
                        <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Paper>
                            <TextField type='text' label="FULL NAME" placeholder="Enter FullName" id="ffname" name="ffname" fullWidth required /> 
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper>
                            <TextField type='email' label="EMAIL" placeholder="Enter Email" id="eemail" name="eemail" fullWidth required />
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper>
                            <TextField type='number' label="PHONE NUMBER" placeholder="Enter PhoneNumber" id="ppnumber" name="ppnumber" fullWidth required /> 
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper>
                            <TextField type='text' label="ADDRESS" placeholder="Enter Address" id="aaddress" name="aaddress" fullWidth required /> 
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper>
                            <TextField type='text' label="STAFF dESIGNATION" placeholder="Enter Designation" id="designation" name="designation" fullWidth required /> 
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper>
                            <TextField type='number' label="SALARY" placeholder="Enter Salary" id="ssalary" name="ssalary" fullWidth required />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} >
                            <Paper>
                            <TextField type='text' label="COMMENT" placeholder="Type Comment " id="ccomment" name="ccomment" fullWidth required />
                            </Paper>
                        </Grid>
                        <Button type="submit"  style={buttonStyle} variant="contained" fullWidth >ADD STAFF</Button>
                        </Grid>
                    </Grid>
                

            </div>
    );
}