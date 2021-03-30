import React from 'react';
import { Grid, Paper, Button} from '@material-ui/core';
import { checkStatus } from '../insurance/PolicyRepo';


export class StatusContainer extends React.Component {
    
    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: {},
          status: '',
        }
        
        }

        componentDidMount(){
          let username = localStorage.getItem("username");
          console.log(username);
        }
        status = () => {
          checkStatus().then(response => {
            console.log(response);
            this.setState({ status: response.data }); 


           })
        }
        render() {
            return (
        <Grid container>
        <Grid item md={12}>
            <Paper className="papergriddiv">
            <Button onClick={() => this.status()} color="secondary" variant="contained">
                            Check Status
                        </Button>
            <h2>{this.state.status ? this.state.status : "Waiting for status"}</h2>
            </Paper>
        </Grid>
      </Grid>            );
}
}