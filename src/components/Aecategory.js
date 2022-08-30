import { Button, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";

export default function Aecategory() {
   
    const paperStyle={padding: 20,height: '70vh',width: 300,margin: "20px auto",backgroundColor: "grey"}
    const Gridd={backgroundColor: 'teal', paddingTop: '10px', color: 'black'}
    const gStyle={paddingTop: "10px"}
    const buttonStyle={ margin: '8px 0', backgroundColor: 'green', color: 'white' }
    return(
        <div className="containerA=">
        <Grid container spacing={2}>
            
            <Paper style={paperStyle}>
            <Grid align='center' style={Gridd}>
                <h2>ADD EXPENSE CATEGORY</h2>
            </Grid>
            <Grid item xs={12}>
              <Paper>
              <TextField type="text" label="NEW EXPENSE CATEGORY" Placeholder="Add Expense Category " id="ecat" name="ecat" fullWidth required />
              </Paper>
            </Grid>
            <Grid item xs={12} style={gStyle}>
              <Paper>
              <TextField type="text" label="DESCRIPTION " Placeholder="Description " id="desc" name="desc" fullWidth required />
              </Paper>
            </Grid>
            <Button type="submit" style={buttonStyle} variant="contained" fullWidth>ADD EXPENSE</Button>
                    
            </Paper>
        </Grid>
        </div>

    );
}