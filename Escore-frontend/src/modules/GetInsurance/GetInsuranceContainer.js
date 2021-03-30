import React from 'react';
import { Grid, Paper, Button} from '@material-ui/core';

import { getInsurance } from '../insurance/PolicyRepo';

export default class GetInsuranceContainer extends React.Component{
    
     
  constructor(props) {
    super(props)
    this.state ={
      formdata: {},
      data: {},
    }
    
    }

    getInsurance = (username) => {
      getInsurance(username).then(response => {
       })
    }
    componentDidMount(){
          console.log(localStorage.getItem("username"));
          let username = localStorage.getItem("username");
          console.log(username);
          this.setState({ username: username }); 

    }


    render() {
        return (
    <Grid container>
    <Grid item md={12}>
        <Paper className="papergriddiv">
        <Button onClick={() => this.getInsurance(this.state.username)}color="primary" variant="contained">Get Insurance</Button>

        </Paper>
    </Grid>
  </Grid>            );
}
}