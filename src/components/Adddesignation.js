import React from "react";
import { Button, Grid, Paper, TextField } from "@material-ui/core";

export default function Adddesignation() {
    const paperStyle={padding: 20,height: '70vh',width: 300,margin: "20px auto",backgroundColor: "grey"}
    const Gridd={backgroundColor: 'teal', paddingTop: '10px', color: 'black'}
    const gStyle={paddingTop: "10px"}
    const buttonStyle={ margin: '8px 0', backgroundColor: 'green', color: 'white' }
    return(
        <div className="containerA=">
        <Grid container spacing={2}>
            
            <Paper style={paperStyle}>
            <Grid align='center' style={Gridd}>
                <h2>ADD DESIGNATION</h2>
            </Grid>
            <Grid item xs={12}>
              <Paper>
              <TextField type="text" label="NEW DEPARTMENT" Placeholder="Job Department" id="depart" name="depart" fullWidth required />
              </Paper>
            </Grid>
            <Grid item xs={12} style={gStyle}>
              <Paper>
              <TextField type="text" label="DESCRIPTION " Placeholder="Description " id="desc" name="desc" fullWidth required />
              </Paper>
            </Grid>
            <Button type="submit" style={buttonStyle} variant="contained" fullWidth>ADD DEPARTMENT</Button>
                    <p style={gStyle}> 
                    This is to Add any newly created department within the company.
                    <p>
                    For Example Taioring is Department on its own so as Cleaners.
                    </p>
                </p>
            </Paper>
        </Grid>
        </div>
    );
}