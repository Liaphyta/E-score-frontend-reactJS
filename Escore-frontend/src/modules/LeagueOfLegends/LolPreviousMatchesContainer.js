import React from 'react';
import { getPreviousMatches } from './LeagueOfLegendsRepo';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../navbar/NavBar';
import './LolPreviousMatchesContainer.css';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';

export default class LolPreviousMatchesContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: []
        }
      }
      componentDidMount(){
        this.loadMatches();
    }
      loadMatches = () => {
        getPreviousMatches().then(response => {
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
            <NavBar/>
            <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <div className="card" >
                  <div className="card-body">
                    <div className="table-wrapper">
                    <table className="table table-dark table-hover table-bordered table-striped table-fixed">
                      <thead className="thead thead-dark">
                      <tr>
                        <th style={{position:'sticky',top:'-1px',textAlign:'center'}} scope="col">Red Side</th>
                        <th style={{position:'sticky',top:'-1px',textAlign:'center'}} scope="col">Blue Side</th>
                        <th style={{position:'sticky',top:'-1px',textAlign:'center'}} scope="col">Winner</th>
                        <th style={{position:'sticky',top:'-1px',textAlign:'center'}} scope="col">Time</th>
                        <th style={{position:'sticky',top:'-1px',textAlign:'center'}} scope="col">Status</th>
                        <th style={{position:'sticky',top:'-1px',textAlign:'center'}} scope="col">League Name</th>
                      </tr>
                    </thead>
                    <tbody className="tbody-dark">
                        {
                             this.state.data &&
                             this.state.data.map(item => {
                               return (   
                                <tr>
                                <td>{item.opponentOneName}</td>
                                <td>{item.opponentTwoName}</td>
                                <td>{item.winner}</td>
                                <td> {item.time }</td>
                                <td> {item.status==='not_started' ? "Not started" : item.status }</td>
                                <td>{item.leagueName}</td>
                                </tr>
                               )})
                    }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
            <div className="col-4">
              
              <Card style={{float:'right',textAlign:'center',marginTop:'200px',paddingTop:'5px',background: 'rgba(255,193,7, 0.8)'}}>
                  <p style={{color:'black'}}>League of Legends is a 3D, third-person multiplayer online battle arena
                     game.The game consists of three current running game modes: Summoner's Rift, Twisted Treeline, and Howling Abyss.
                     Another game mode, The Crystal Scar, has since been removed.Players compete in matches, 
                     lasting anywhere from 20 to 60 minutes on average. In each game mode, teams work together to achieve a victory condition, 
                     typically destroying the core building (called the Nexus) in
                     the enemy team's base after bypassing a line of defensive structures called turrets, or towers.</p>
              </Card>
              <div style={{float:'left',marginTop:'50px',marginLeft:'20px'}}>
                  <Link to="/lol/upcoming"><Button  variant="warning" style={{float:'left',marginRight:'40px'}}>View Upcoming Matches</Button></Link>
                  <Link to="/lol/tournaments"><Button variant="warning">View Tournaments</Button></Link>
              </div>
            </div>
            </div>
            </div>
            </section>
            </div>
          )
      }
}