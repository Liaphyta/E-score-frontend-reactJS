import React from 'react';
import { Grid, Paper, Button, TextField} from '@material-ui/core';
import Webcam from 'react-webcam';
import { MAIN_SNACKBAR_SHOW } from '../../shared/actions/MainActions';
import { dispatchAction } from '../..';
import { authenticate } from '../insurance/PolicyRepo';


export class AuthenticateContainer extends React.Component {
     
    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: {},
        }
        
        }
      
        componentDidMount(){
          let username = localStorage.getItem("username");
          console.log(username);
        }
        videoConstraints = {
          width: 1280,
          height: 720,
          facingMode: "user"
        };
        authenticate = () => {
          authenticate(this.state.formdata).then(response => {
            dispatchAction({
              type: MAIN_SNACKBAR_SHOW,
              payload: {
                snackbarMessage: 'You are successfully authenticated!',
                snackbarType: 'success'
              }
            }); })
        }
         

        render() {
            return (
        <Grid container>
        <Grid item md={12}>
            <Paper className="papergriddiv">
              <h2>You need to authenticate in order to use our services.Capture photo from the camera and insert the passport photo</h2>
              <TextField
                            variant="outlined"
                            autoFocus
                            required
                            margin="dense"
                            id="passport photo"
                            label="Passport photo"
                            type="text"
                            fullWidth
                            value={this.state.formdata.passportPhoto ? this.state.formdata.passportPhoto : ''}
                            onChange={this.handleFormInput('passportPhoto')}
                        />
              <Webcam
        audio={false}
        height={720}
        ref={this.webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={this.videoConstraints}
      />
      <Button onClick={this.capture}color="primary" variant="contained">Capture photo</Button>
      <div>
      <Button onClick={() => this.authenticate()}color="primary" variant="contained">Authenticate</Button>

        </div>
            </Paper>
        </Grid>
      </Grid>            );
}
}