import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";


export default function Salaries(){
    const Gridd={backgroundColor: 'teal', paddingTop: '10px', color: 'black'}
    const buttonStyle={ margin: '8px 0', backgroundColor: 'green', color: 'white' }
    return (
        <div className="containerA">
            <Grid>
                <Grid align='center' style={Gridd}>
                    <h2><b>SALARY</b></h2>
                </Grid>
                <Grid container spacing={2}>

                    <Grid item xs={6}>
                        <Paper>
                            <TextField type="text" label="SELECT STAFF" placeholder="Select Staff" name="sstaff" id="sstaff" fullWidth required />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                        <TextField type="number" label="ENTER AMOUNT" placeholder="Enter Amount" name="amount" id="amount" fullWidth required />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                            <TextField type="text" label="DESCRIPTION" placeholder="Type Description" name="descri" id="descri" fullWidth required />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                            <TextField type="date" label="DATE" placeholder="Enter Date" name="date" id="date" fullWidth required />
                        </Paper>
                    </Grid>
                        <Button type="submit" variant="contained" style={buttonStyle} fullWidth><b>MAKE PAYMENT</b></Button>
                </Grid>
            </Grid>
        </div>

    );

}