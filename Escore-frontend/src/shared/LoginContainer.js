import React from 'react';
import axios from 'axios';
import {Card,Button,Snackbar, Container, CssBaseline, Avatar, Typography, SnackbarContent } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { SERVER_URL } from '../config/config';
import { Link, Redirect } from 'react-router-dom';

export default class LoginCotainer extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
          redirect:false,
          formdata: {},
          data: {}
        }
      }
      
      getAuthorizationHeader(){
        return "Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0";
      }
      login = () => {
        axios({
          url: SERVER_URL + '/oauth/token?username='
          + this.state.username 
          + '&password='
          + this.state.password
          + '&grant_type=password',
          method: 'POST',
          headers: {
              'Authorization' : this.getAuthorizationHeader()
          }
      }).then(res => {
        this.handleAuthSuccess(res);
        console.log(res);
          this.setState({
            loggedIn: true
          })
      }).catch(err => {
        this.handleAuthError(err);
        this.setState({
          loggedIn: false
        })
        })
        
        // localStorage.setItem("isLoggedIn", true)
      }
      logout = () => {
        this.setState({
          loggedIn: false
        })
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("idm");
        localStorage.removeItem("me");
      }
      handleFormInput = name => event => {
        this.setState({
          [name]: event.target.value
        });
      }
      
      handleAuthError = err => {
    
    
        this.setState({
            snackbarOpen: true,
            messageVariant: 'error',
            snackbarMessage: 'Wrong credentials!',
            shakeClass: 'apply-shake',
            loading: false
        })
    }
      handleAuthSuccess = res => {
    
        this.setState({
            messageVariant: 'success',
            snackbarMessage: '',
            shakeClass: '',
            snackbarOpen: false,
            loading: false,
            redirect:true
        });
        var expires_at_date = new Date();
        expires_at_date = new Date(expires_at_date.getTime() + res.data.expires_in * 1000);
        res.data.expires_at = expires_at_date;
    
    
        res.data.username = this.state.username;
        localStorage.setItem('idm', JSON.stringify(res.data));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("username",this.state.username);
        
        axios({
            url: SERVER_URL +'/users/me?access_token='
            + res.data.access_token, 
            method: 'GET',
            headers: {
                'Authorization' : 'Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0'
            }
        }).then(response => {
            localStorage.setItem('me', JSON.stringify(response.data));
            localStorage.setItem("isLoggedIn", true);
            this.setState({
                logedin: true
            })
        }).catch(err => {
    
    
        })
        
    } 
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/lol/upcoming' />
      }
    }
    render()
    {
        return(
            <div className="intro-header">
            {this.renderRedirect()}
            <section className="view intro-2 rgba-gradient" style={{overflow:'auto'}}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Card raised={true} style={{position:'absolute',top:'50%',left:'50%',marginTop:'-220px',marginLeft:'-300px',width:'600px',height:'440px'}}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '8%' }}>
                <Avatar style={{ margin: 1, backgroundColor: '#f50057' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" style={{color:'black'}}>
                  Sign in
                </Typography>
                <form style={{ width: '90%', marginTop: 1 }} noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    value={this.state.username ? this.state.username : ''}
                    onChange={this.handleFormInput('username')}
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={this.state.password ? this.state.password : ''}
                    onChange={this.handleFormInput('password')}
                  />
                  <Button
                    style={{width:'100px',marginTop:'5px',marginLeft:'230px'}}
                    variant="contained"
                    color="secondary"
                    onClick={() => this.login()}
                  >
                    Sign In
          </Button>
          <Typography component="h6" variant="h6" style={{color:'black',paddingTop:'5px',textAlign:'center'}}>
                  If you don't have an account, please click below.
                </Typography>
                <Link to="/register">
                <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    style={{marginTop:'5px',width:'100px',marginLeft:'230px'}}
                  >Register</Button>
                  </Link>
                </form>
              </div>
              </Card>
              <Snackbar
            width={600+'px'}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            onClose={this.handleCloseSnackbar}
            open={this.state.snackbarOpen}
            variant={this.state.messageVariant}
            autoHideDuration={6000}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}

          >
            <SnackbarContent
              onClose={this.handleCloseSnackbar}
              variant={this.state.messageVariant}
              message={this.state.snackbarMessage}
            /> 
          </Snackbar>
            </Container>
            </section>
           </div>
        )
    } 
}