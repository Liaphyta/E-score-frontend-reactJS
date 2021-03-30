import { Button, Card, Container, Grid, TextField,Typography } from '@material-ui/core';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { NavBar } from '../modules/navbar/NavBar';
import { createUser } from '../modules/users/UserRepo';

export default class RegisterContainer extends React.Component
{
    constructor(props) {
        super(props)
        this.state ={
          redirect:false,
          formdata: {},
          data: {},
          singleuser:{},
          redirect:false
        }
      }
      handleUserFormChange = name => event => {

        let user = this.state.singleuser;
       user[name] = event.target.value;
       this.setState({
           singleuser: user
       });

        this.setState({
        singleuser: user
        });  
    };
    register = () => {
        createUser(this.state.singleuser).then(response => {
            this.setState({
              redirect: true
          },
          );
          }).catch(error => {
            console.log(error);
          });
    };
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/login' />
        }
      }
    render()
    {
        return(
            <div className="intro-header">
            {this.renderRedirect()}
            <section className="view intro-2 rgba-gradient" style={{overflow:'auto'}}>
            <NavBar></NavBar>
            <Container component="main" maxWidth="xs">
            <Card raised={true} style={{position:'absolute',top:'50%',left:'50%',marginTop:'-230px',marginLeft:'-300px',width:'600px',height:'460px'}}>
            <Typography style={{textAlign:'center',marginTop:'10px'}}>
                Please enter your information.
            </Typography>
            <Grid container direction={"column"} spacing={1}>
            <Grid item>
            <TextField
            id="username"
            label="Username"
            onChange={this.handleUserFormChange('username')}
            value={this.state.singleuser.username}
            style={{width:'90%',marginLeft:'30px'}}
            color="secondary"
            />
            </Grid>
            <Grid item>
            <TextField
                id="password"
                type="password"
                label="Password"
                onChange={this.handleUserFormChange('password')}
                fullWidth={true}
                value={this.state.singleuser.password}
                margin="normal"
                color="secondary"
                style={{width:'90%',marginLeft:'30px'}}

            />
            </Grid>
            <Grid item>
            <TextField
            id="name"
            label="First name"
            onChange={this.handleUserFormChange('name')}
            fullWidth={true}
            value={this.state.singleuser.name}
            margin="normal"
            color="secondary"
            style={{width:'90%',marginLeft:'30px'}}

            />
            </Grid>
            <Grid item>
            <TextField
            id="surname"
            required
            fullWidth={true}
            onChange={this.handleUserFormChange('surname')}
            label="Last name"
            value={this.state.singleuser.surname}
            margin="normal"
            color="secondary"
            style={{width:'90%',marginLeft:'30px'}}

            />
            </Grid>
            <Grid item>
            <TextField
                id="email"
                fullWidth={true}
                label="E-Mail"
                onChange={this.handleUserFormChange('email')}
                value={this.state.singleuser.email}
                margin="normal"
                color="secondary"
                style={{width:'90%',marginLeft:'30px'}}

            />
           <Button
                    variant="contained"
                    color="secondary"
                    style={{marginTop:'10px',marginLeft:'465px',textAlign:'right'}}
                    onClick={() => this.register()}
                  >Register</Button>
            </Grid>
            </Grid>
            </Card>
            </Container>
            </section>
            </div>
        )
    }
}