import { Button, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";

export default function Aexpense() {
    const paperStyle={padding: 20,height: '70vh',width: 300,margin: "20px auto",backgroundColor: "grey"}
    const Gridd={backgroundColor: 'teal', paddingTop: '10px', color: 'black'}
    const gStyle={paddingTop: "10px"}
    const buttonStyle={ margin: '8px 0', backgroundColor: 'green', color: 'white' }
    return(
        <div conta>
            <Grid>
                <Paper style={paperStyle}>
                    <Grid align='center' style={Gridd}>
                        <h2>ADD EXPENSE</h2>
                    </Grid>
                    <Grid style={gStyle}>
                        <Paper>
                            <TextField type="text" label="SELECT CATEGORY" placeholder="Select Category" id="scart" name="scart" fullWidth required />
                        </Paper>
                    </Grid>
                    <Grid style={gStyle}>
                        <Paper>
                            <TextField type="number" label="AMOUNT" placeholder="Enter Amount " id="amount" name="amount" fullWidth required />
                        </Paper>
                    </Grid>
                    <Grid style={gStyle}>
                        <Paper>
                            <TextField type="date" label="DATE" placeholder="Enter Date " id="date" name="date" fullWidth required />
                        </Paper>
                    </Grid>
                    <Grid style={gStyle}>
                        <Paper>
                            <TextField type="text" label="DESCRIPTION" placeholder="Type Description " id="desc" name="desc" fullWidth required />
                        </Paper>
                    </Grid>
                <Button type="submit" variant="contained" style={buttonStyle} fullWidth>ADD EXPENSE</Button>
                </Paper>
            </Grid>
        </div>
    );
}