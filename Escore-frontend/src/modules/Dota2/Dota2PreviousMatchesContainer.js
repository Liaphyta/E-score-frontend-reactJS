import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../navbar/NavBar';
import { Link } from 'react-router-dom';
import './Dota2containers.css';
import { getPreviousMatches } from './Dota2Repo';
import { Card } from '@material-ui/core';

export default class Dota2PreviousMatchesContainer extends React.Component
{
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
            <section className="view intro-2 rgba-gradient" style={{overflow:'auto'}}>
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
                        <th style={{position:'sticky',top:'-1px',textAlign:'center'}} scope="col">Radiant</th>
                        <th style={{position:'sticky',top:'-1px',textAlign:'center'}} scope="col">Dire</th>
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
                  <p style={{color:'black'}}>Dota 2 is a multiplayer online battle arena (MOBA) video game developed
                     and published by Valve Corporation. The game is a sequel to Defense of the Ancients (DotA), 
                     which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos and 
                     its expansion pack, The Frozen Throne. Dota 2 is played in matches between two teams of five 
                     players, with each team occupying and defending their own separate base on the map. Each of 
                     the ten players independently controls a powerful character, known as a "hero", who all have 
                     unique abilities and differing styles of play. During a match, players collect experience points 
                     and items for their heroes to successfully defeat the opposing team's heroes in player
                     versus player combat. A team wins by being the first to destroy the other team's "Ancient", a large structure located within their base.</p>
              </Card>
              <div style={{float:'left',marginTop:'50px',marginLeft:'20px'}}>
                  <Link to="/dota2/upcoming"><Button variant="warning" style={{float:'left',marginRight:'40px'}}>View Upcoming Matches</Button></Link>
                  <Link to="/dota2/tournaments"><Button variant="warning">View Tournaments</Button></Link>
              </div>
            </div>
            </div>
            </div>
            </section>
            </div>
          )
      }
}