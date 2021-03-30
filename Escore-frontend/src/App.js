import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import HomeContainer from './modules/home/HomeContainer';
import { Grid, Button, LinearProgress, Snackbar, Container, CssBaseline, Avatar, Typography, SnackbarContent } from '@material-ui/core';
import MySnackbarContentWrapper from './shared/Snackbar';
import { connect } from 'react-redux'
import { dispatchAction } from '.';
import { MAIN_SNACKBAR_HIDE } from './shared/actions/MainActions';
import {InsuranceContainer} from './modules/insurance/InsuranceContainer';
import {StatusContainer} from './modules/status/StatusContainer';
import { TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { SERVER_URL } from './config/config';
import SupportContainer from './modules/support/SupportContainer';
import UnauthorizedContainer from './modules/error/UnauthorizedContainer';
import { AuthenticateContainer } from './modules/Authentication/AuthenticateContainer';
import GetInsuranceContainer from './modules/GetInsurance/GetInsuranceContainer';
import LolPreviousMatchesContainer from './modules/LeagueOfLegends/LolPreviousMatchesContainer';
import LolUpcomingMatchesContainer from './modules/LeagueOfLegends/LolUpcomingMatchesContainer';
import LolTournamentContainer from './modules/LeagueOfLegends/LolTournamentContainer';
import Dota2UpcomingMatchesContainer from './modules/Dota2/Dota2UpcomingMatchesContainer';
import Dota2PreviousMatchesContainer from './modules/Dota2/Dota2PreviousMatchesContainer';
import Dota2TournamentsContainer from './modules/Dota2/Dota2TournamentsContainer';
import CsgoUpcomingMatchesContainer from './modules/CounterStrikeGO/CsgoUpcomingMatchesContainer';
import CsgoPreviousMatchesContainer from './modules/CounterStrikeGO/CsgoPreviousMatchesContainer';
import CsgoTournamentsContainer from './modules/CounterStrikeGO/CsgoTournamentsContainer';
import TeamsContainer from './modules/Teams/TeamsContainer';
import LoginCotainer from './shared/LoginContainer';
import ProfileContainer from './modules/users/ProfileContainer';
import RegisterContainer from './shared/RegisterContainer';
import StatisticsContainer from './shared/StatisticsContainer';
import IndividualStatisticsContainer from './shared/IndividualStatisticsContainer';


export function hasRole(roles) {
  var role = roles.split(",")
  console.log(role);
  var currentRoles = localStorage.getItem('me') && JSON.parse(localStorage.getItem('me')).authorities;
  console.log(currentRoles);
  var hasRole = false;
  if (currentRoles != null) {
      for (var i = 0; i < role.length; i++) {

          for (var j = 0; j < currentRoles.length; j++) {
              if (role[i] == currentRoles[j].authority) {
                  hasRole = true;
              }
          }

          if (hasRole == false) {
              return false;
          }
          if (i != role.length - 1) {
              hasRole = false;
          }
      }
  }
  return hasRole;
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      displayProgressBar: false,
      snackbarOpen: false,
      loggedIn: false,
      settingsClicked: false,
    }
  }
    getAuthorizationHeader(){
    return "Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0";
}

  componentDidMount() {

  }

  
  handleSettings = () => {
    this.setState({
      settingsClicked:true
    })
  }

  
  componentWillMount() {
      if (localStorage.getItem("isLoggedIn")) {
        this.setState({
          loggedIn: true
        })
      }
      console.log('Login check')
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
        loading: false
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

  handleCloseSnackbar = () => {
    dispatchAction({
      type: MAIN_SNACKBAR_HIDE,
      payload: {}
    })
  }

  render() {
    return (
      <Router>
        
        {
          <div className="App">
              
            {/* <Route render={() => <Redirect to="/"/>} /> */}
            <Route path="/" exact component={HomeContainer} />
            <Route path="/createInsurance" component={InsuranceContainer} />
            <Route path="/status" component={StatusContainer} />
            <Route path="/authenticate"  component={AuthenticateContainer} />
            <Route path="/insurance"  component={GetInsuranceContainer} />
            <Route path="/lol/previous" component={LolPreviousMatchesContainer}/>
            <Route path="/lol/upcoming" component={LolUpcomingMatchesContainer}/>
            <Route path="/app/error/unauthorized" component={UnauthorizedContainer}/>
            <Route path="/lol/tournaments" component={LolTournamentContainer}/>
            <Route path="/dota2/upcoming" component={Dota2UpcomingMatchesContainer}/>
            <Route path="/dota2/previous" component={Dota2PreviousMatchesContainer}/>
            <Route path="/dota2/tournaments" component={Dota2TournamentsContainer}/>
            <Route path="/csgo/upcoming" component={CsgoUpcomingMatchesContainer}/>
            <Route path="/csgo/previous" component={CsgoPreviousMatchesContainer}/>
            <Route path="/csgo/tournaments" component={CsgoTournamentsContainer}/>
            <Route path="/support" component={SupportContainer}/>
            <Route path="/teams" component={TeamsContainer}/>
            <Route path="/login" component={LoginCotainer}/>
            <Route path="/profile" component={ProfileContainer}/>
            <Route path="/register" component={RegisterContainer}/>
            <Route path="/statistics" component={StatisticsContainer}/>
            <Route path="/statistics/:id" component={IndividualStatisticsContainer} /> 
          </div>
        }
      </Router>
    )
  }

}

const mapStateToProps = state => {
  return {
    displayProgressBar: state.mainReducer.displayProgressBar,
    snackbarOpen: state.mainReducer.snackbarOpen,
    snackbarMessage: state.mainReducer.snackbarMessage,
    snackbarType: state.mainReducer.snackbarType
  }
};

export default connect(mapStateToProps, ({

}))(App);

