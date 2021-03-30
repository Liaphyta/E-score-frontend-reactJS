import React from 'react';
import { Grid, Paper, Button, TextField } from '@material-ui/core';
import { dispatchAction } from '../..';
import { MAIN_SNACKBAR_SHOW } from '../../shared/actions/MainActions';
import {uploadDocument } from './PolicyRepo';


export class InsuranceContainer extends React.Component {
     
    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: {},
        }
        }
  
        componentDidMount(){
          console.log(this.props);
          console.log(localStorage.getItem("username"));
          let username = localStorage.getItem("username");
          console.log(username);
        }

        handleFormInput = name => event => {      
          var formdata = this.state.formdata;
          formdata[name] = event.target.value;
          this.setState({
            formdata: formdata,
          });
      }
      uploadDocuments = () => {
        uploadDocument(this.state.formdata).then(response => {
          dispatchAction({
            type: MAIN_SNACKBAR_SHOW,
            payload: {
              snackbarMessage: 'The documents are sent successfully!',
              snackbarType: 'success'
            }
          }); })
      }


        render() {
            return (
                <Grid container>
        <Grid item md={12}>
            <Paper className="papergriddiv">
              <h1>Please insert the following documents</h1>
            <TextField
                            variant="outlined"
                            autoFocus
                            required
                            margin="dense"
                            id="Birth Certificate"
                            label="Birth Certificate"
                            type="text"
                            fullWidth
                            value={this.state.formdata.birthCertificate ? this.state.formdata.birthCertificate : ''}
                            onChange={this.handleFormInput('birthCertificate')}
                        />
                        <TextField
                            variant="outlined"
                            autoFocus
                            required
                            margin="dense"
                            id="Insurance Form"
                            label="Insurance Form"
                            type="text"
                            fullWidth
                            value={this.state.formdata.insuranceForm ? this.state.formdata.insuranceForm : ''}
                            onChange={this.handleFormInput('insuranceForm')}
                        />
                        <TextField
                            variant="outlined"
                            autoFocus
                            required
                            margin="dense"
                            id="Medical Certificate"
                            label="Medical Certificate"
                            type="text"
                            fullWidth
                            value={this.state.formdata.medicalCertificate ? this.state.formdata.medicalCertificate : ''}
                            onChange={this.handleFormInput('medicalCertificate')}
                        />
                        <TextField
                            variant="outlined"
                            autoFocus
                            required
                            margin="dense"
                            id="Investigation Report"
                            label="Investigation Report"
                            type="text"
                            fullWidth
                            value={this.state.formdata.investigationReport ? this.state.formdata.investigationReport : ''}
                            onChange={this.handleFormInput('investigationReport')}
                        />
                        <TextField
                            variant="outlined"
                            autoFocus
                            required
                            margin="dense"
                            id="Discharche summary"
                            label="Discharge summary"
                            type="text"
                            fullWidth
                            value={this.state.formdata.dischargeSummary ? this.state.formdata.dischargeSummary : ''}
                            onChange={this.handleFormInput('dischargeSummary')}
                        />
                        <Button onClick={() => this.uploadDocuments()} color="secondary" variant="contained">
                            Send
                        </Button>
            </Paper>
        </Grid>
      </Grid>
            );
}
}