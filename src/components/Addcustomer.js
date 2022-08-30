import React from "react";
import { Grid, Paper, TextField, Button} from "@material-ui/core";

   export default function Adddcustomer () {
const buttonStyle={ margin: '8px 0', backgroundColor: 'green' }
const Gridd={backgroundColor: 'teal', paddingTop: '10px', color: 'black'}
            return (
                <div className="containerA">
                <Grid>
                    <Grid align='center' style={Gridd}>
                    <h2><b>ADD CUSTOMER</b></h2>
                    </Grid>
                <Grid  container spacing={2}>
                    <Grid item xs={6}>
                        <Paper className="Paper">
                        <TextField type="text" label="FULLNAME" placeholder="Enter FullName" id="fname" name="fname" fullWidth required />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                        <TextField type ="text" label="GENDER" placeholder="Enter Gender" id="gender" name="gender" fullWidth required />
                        </Paper>
                    </Grid>        
                    <Grid item xs={6}>
                        <Paper>
                        <TextField type ="number" label="PHONE NUMBER" placeholder="Enter PhoneNumber" id="pnumber" name="pnumber" fullWidth required />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                        <TextField type ="email" label="EMAIL" placeholder="Enter Email" id="email" name="email" fullWidth required />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                        <TextField type ="text" label="ADDRESS" placeholder="Enter Address" id="adrress" name="address" fullWidth required />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                        <TextField type ="text" label="CITY" placeholder="Enter City" id="city" name="city" fullWidth required />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                        <TextField type ="text" label="COMMENT" placeholder="Type comment" id="comment" name="comment" fullWidth required />
                        </Paper>
                    </Grid>
                    <Button type="submit" style={buttonStyle} variant="contained" color="primary" fullWidth>ADD CUSTOMER</Button>
                </Grid>
                </Grid>
                </div>

            );
   }