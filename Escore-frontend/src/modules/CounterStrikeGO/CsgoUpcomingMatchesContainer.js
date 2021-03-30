import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../navbar/NavBar';
import { Link } from 'react-router-dom';
import './CsgoContainers.css';
import { getUpcomingMatches } from './CsgoRepo';
import { Card } from '@material-ui/core';
export default class CsgoUpcomingMatchesContainer extends React.Component
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
        getUpcomingMatches().then(response => {
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
                        <th style={{position:'sticky',top:'-1px',textAlign:'center'}} scope="col">Terrorists</th>
                        <th style={{position:'sticky',top:'-1px',textAlign:'center'}} scope="col">Counter-Terrorists</th>
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
                  <p style={{color:'black'}}>Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter video game developed by 
            Hidden Path Entertainment and Valve Corporation. It is the fourth game in the Counter-Strike series and was released for Microsoft 
            Windows, OS X, Xbox 360, and PlayStation 3 on August 21, 2012, while the Linux version was released in 2014.
              The game pits two teams against each other: the Terrorists and the Counter-Terrorists. Both sides are tasked with eliminating 
              the other while also completing separate objectives. The Terrorists, depending on the game mode, must either plant the bomb or 
              defend the hostages, while the Counter-Terrorists must either prevent the bomb from being planted, defuse the bomb, or rescue the 
              hostages. There are nine game modes, all of which have distinct characteristics specific to that mode. The game also has matchmaking 
              support that allows players to play on dedicated Valve servers, as well as allowing members of the community to host their own servers 
              with custom maps and game modes. A battle-royale game-mode, "Danger Zone", was introduced in 2018.</p>
              </Card>
              <div style={{float:'left',marginTop:'50px',marginLeft:'20px'}}>
                  <Link to="/csgo/previous"><Button variant="warning" style={{float:'left',marginRight:'40px'}}>View Finished Matches</Button></Link>
                  <Link to="/csgo/tournaments"><Button variant="warning">View Tournaments</Button></Link>
              </div>
            </div>
            </div>
            </div>
            </section>
            </div>
          )
      }
}