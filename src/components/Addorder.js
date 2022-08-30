import React from "react";
import { Grid, Paper, TextField, Button  } from "@material-ui/core";


export default function Addorder () {
    const paperStyle={padding: 20,height: '60vh',width: 300,margin: "20px auto"}
    const buttonStyle={ margin: '8px 0'}
    return(
                <Grid>
                    <Paper className="Paper" elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <h2>ADD ORDER</h2>
                    </Grid>
                <Grid className="Grid">
                    <TextField label="SELECT CUSTOMER" type="text" placeholder="Select Customer" name="scustomer" id="scustomer" fullWidth required/>
                    <TextField label="ORDER DESCRIPTION" type="text" placeholder="Order Description" name="description" id="description" fullWidth required/>
                    <TextField label="DATE" type="date" placeholder="Date Recieved" name="drecieved" id="drecieved" fullWidth required/>
                    <TextField label="FULL AMOUNT" type="number" placeholder="Full Amount" name="famount" id="fmount" fullWidth required />
                    <TextField label="PAID AMOUNT" type="number" placeholder="Paid Amount" name="pamount" id="pamount" fullWidth required/>
                    <TextField label="CLEARED ??" type="text" placeholder="Cleared? yes/No" name="cleared" id="cleared" fullWidth required/> 
                <Button type="submit" style={buttonStyle} variant="contained" color="primary" fullWidth>ADD ORDER</Button>
                </Grid>
                </Paper>
                </Grid>

    );
}