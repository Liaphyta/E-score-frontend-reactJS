import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../navbar/NavBar';
import './LolPreviousMatchesContainer.css';
import WorldsLogo from '../../pictures/worldsLogo.png'
import { getTournaments } from './LeagueOfLegendsRepo';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';
export default class LolTournamentContainer extends React.Component
{
    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: []
        }
      }
      componentDidMount(){
        this.loadTournaments();
    }
      loadTournaments = () => {
        getTournaments().then(response => {
          this.setState({
            data: response.data
        },
        );
        }).catch(error => {
          console.log(error);
        });
      }
      render(){
          return (
<div class="intro-header">
        <section className="view intro-2 rgba-gradient" style={{overflow:'auto'}}>
        <NavBar/>
        <div className="container-fluid">
        <div className="row">
            <div className="col-3">
                <div className="logoWorlds">
                    <img src={WorldsLogo} style={{height:'400px',margin:'auto',display:'block'}}/>
                </div>
                <Card className="infoTour"style={{color:'yellow',textAlign:'center',background: 'rgba(0,0,0, 0.5)'}}>
                    <p>The League of Legends World Championship is the annual professional League 
                        of Legends world championship tournament hosted by Riot Games and is the 
                        culmination of each season. Teams compete for the champion title, the 70 pounds (32 kg) 
                        Summoner's Cup, and approximately US$6 million championship prize.</p>
                        <a href="https://www.twitch.tv/riotgames"style={{color:'yellow',fontSize:'30px'}}>Twitch Stream</a>
                        <h5 style={{paddingTop:'20px'}}>Begin date: 2nd October 2021</h5>
                        <h5>End date: 10th November 2021</h5>
                </Card>
            </div>
          <div className="col-6">
            <div className="card" >
              <div className="card-body">
                <div className="table-wrapper">
                <table className="table table-dark table-hover table-bordered table-striped table-fixed">
                  <thead className="thead thead-dark">
                  <tr>
                    <th style={{position:'sticky',top:'-1px',textAlign:'center'}} scope="col">Tournament Name</th>
                    <th style={{position:'sticky',top:'-1px',textAlign:'center'}} scope="col">Begins</th>
                    <th style={{position:'sticky',top:'-1px',textAlign:'center'}} scope="col">Prize Pool</th>
                  </tr>
                </thead>
                <tbody className="tbody-dark">
                        {
                            
                             this.state.data &&
                             this.state.data.map(item => {
                               return (   
                                <tr>
                                <td>{item.name}</td>
                                <td>{item.beginAt}</td>
                                <td>{item.prize}</td>
                                </tr>
                               )})
                    }
                 </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        <div className="col-3">
                <div className="table table-warning"style={{marginTop:'100px'}}>
                        <a href="https://lol.gamepedia.com/2020_Season_World_Championship" 
                        className="list-group-item list-group-item-action list-group-item-warning">Winner Worlds 2020 - DAMWON</a>
                        <a href="https://lol.gamepedia.com/2019_Season_World_Championship" 
                        className="list-group-item list-group-item-action list-group-item-warning">Winner Worlds 2019 - FunPlus Phoenix</a>
                        <a href="https://lol.gamepedia.com/2018_Season_World_Championship" 
                        className="list-group-item list-group-item-action list-group-item-warning">Winner Worlds 2018 - Invictus Gaming</a>
                        <a href="https://lol.gamepedia.com/2017_Season_World_Championship" 
                        className="list-group-item list-group-item-action list-group-item-warning">Winner Worlds 2017- Samsung Galaxy</a>
                        <a href="https://lol.gamepedia.com/2016_Season_World_Championship" 
                        className="list-group-item list-group-item-action list-group-item-warning">Winner Worlds 2016 - SK Telecom T1</a>
                        <a href="https://lol.gamepedia.com/2015_Season_World_Championship" 
                        className="list-group-item list-group-item-action list-group-item-warning">Winner Worlds 2015 - SK Telecom T1</a>
                        <a href="https://lol.gamepedia.com/2014_Season_World_Championship" 
                        className="list-group-item list-group-item-action list-group-item-warning">Winner Worlds 2014 - Samsung White</a>
                      </div>
          <div style={{float:'left',marginTop:'50px',marginLeft:'20px'}}>
              <Link to="/lol/upcoming"><Button variant="warning" style={{float:'left'}}>Back to Matches</Button></Link>
          </div>
        </div>
        </div>
        </div>
        </section>
        </div>
          )
      }
}