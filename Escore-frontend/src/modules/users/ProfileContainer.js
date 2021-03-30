import {TextField,Card, Container, CssBaseline,Typography } from '@material-ui/core';
import React from 'react';
import { NavBar } from '../navbar/NavBar';
import { loadUsername } from './UserRepo';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default class ProfileContainer extends React.Component
{
    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: {}
        }
      }
      componentDidMount()
      {
          this.getUsername(localStorage.getItem("username"));
      }
      getUsername = (username) => {
        loadUsername(username).then(response => {
          this.setState({
            data: response.data
        },
        );
        }).catch(error => {
          console.log(error);
        });
      }
      render()
      {
          return(
            <div className="intro-header">
            <section style={{overflow:'auto'}} className="view intro-2 rgba-gradient">
                {console.log(this.state.data)}
            <NavBar/>
            <Container component="main" maxWidth="xs">
              <Card raised={true} style={{position:'absolute',top:'50%',left:'50%',marginTop:'-150px',marginLeft:'-300px',width:'600px',height:'300px'}}>
              <Typography component="h1" variant="h5" style={{color:'black',paddingTop:'10px'}}> My Profile<AccountCircleIcon fontSize='large' style={{marginLeft:'5px'}}></AccountCircleIcon></Typography>
              <TextField
                    margin="normal"
                    id="username"
                    label="Username"
                    value={this.state.data.username ? this.state.data.username : ''}
                    InputProps={{
                        readOnly: true,
                      }}
                    style={{marginLeft:'30px'}}
                  />
                  <TextField
                    margin="normal"
                    id="email"
                    label="Email"
                    value={this.state.data.email ? this.state.data.email : ''}
                    InputProps={{
                        readOnly: true,
                      }}
                    style={{marginLeft:'30px',width:'280px'}}
                  />
                  <TextField
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                      }}
                    id="First name"
                    label="First name"
                    value={this.state.data.name ? this.state.data.name : ''}
                    style={{marginLeft:'30px'}}

                  />
                  <TextField
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                      }}
                    width="50%"
                    id="Last name"
                    label="Last name"
                    value={this.state.data.surname ? this.state.data.surname : ''}
                    style={{marginLeft:'30px'}}
                      
                  />
                  </Card>
             </Container>
            </section>
            </div>
          )
      }
      
}