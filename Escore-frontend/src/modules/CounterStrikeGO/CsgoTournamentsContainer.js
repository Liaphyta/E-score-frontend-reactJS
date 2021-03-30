import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../navbar/NavBar';
import { Link } from 'react-router-dom';
import { getTournaments } from './CsgoRepo';
import './CsgoTournaments.css';
import csgoLogo from '../../pictures/csgoLogo.png';
import { Card } from '@material-ui/core';
export default class CsgoTournamentsContainer extends React.Component
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

      render()
      {
          return(
    <div className="intro-header">
    <section className="view intro-2 rgba-gradient" style={{overflow:'auto'}}>
    <NavBar/>
    <div className="container-fluid">
    <div className="row">
        <div className="col-3">
            <div className="logoCsGo">
                <img src={csgoLogo} style={{height:'300px',margin:'auto',display:'block'}}/>
            </div>
            <Card className="infoTour"style={{color:'yellow',textAlign:'center',background: 'rgba(0,0,0, 0.5)'}}>
                <p>The Intel Extreme Masters Season XIII - Katowice Major 2019 is one of the biggest Valve-sponsored
                   Counter-Strike: Global Offensive Major Championship and the first Major of 2019. The tournament features a 
                   US$1 million prize pool and 24 teams as with previous Majors.This event marks the start of the new Intel Grand Slam Season.</p>
                    <a href="https://www.twitch.tv/esl_csgo"style={{color:'yellow',fontSize:'30px'}}>Twitch Stream</a>
                    <h5 style={{paddingTop:'20px'}}>Begin date: 13th February 2021</h5>
                    <h5>End date: 3rd March 2021</h5>
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
                    <a href="https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XIII/World_Championship" 
                    className="list-group-item list-group-item-action list-group-item-warning">Winner IEM Katowice XII - Astralis</a>
                    <a href="https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XII/World_Championship" 
                    className="list-group-item list-group-item-action list-group-item-warning">Winner IEM Katowice XII - Fnatic</a>
                    <a href="https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XI/World_Championship" 
                    className="list-group-item list-group-item-action list-group-item-warning">Winner IEM Katowice XI- Astralis</a>
                    <a href="https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_X/World_Championship" 
                    className="list-group-item list-group-item-action list-group-item-warning">Winner IEM Katowice X - Fnatic</a>
                    <a href="https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_IV/World_Championshipp" 
                    className="list-group-item list-group-item-action list-group-item-warning">Winner IEM Katowice XII - NaVi</a>
                    <a href="https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_III/World_Championship" 
                    className="list-group-item list-group-item-action list-group-item-warning">Winner IEM Katowice XII - Fnatic</a>
                  </div>
      <div style={{float:'left',marginTop:'50px',marginLeft:'20px'}}>
          <Link to="/csgo/upcoming"><Button variant="warning" style={{float:'left'}}>Back to Matches</Button></Link>
      </div>
    </div>
    </div>
    </div>
    </section>
    </div>


          )
      }
}