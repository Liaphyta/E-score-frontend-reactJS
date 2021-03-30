import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../navbar/NavBar';
import { Link } from 'react-router-dom';
import { getTournaments } from './Dota2Repo';
import './Dota2Tournament.css';
import logoInternational from '../../pictures/internationalLogo.png';
import { Card } from '@material-ui/core';
export default class Dota2TournamentsContainer extends React.Component
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
            <div className="logoWorlds">
                <img src={logoInternational}style={{paddingLeft:'100px',paddingTop:'200px',display:'block'}}/>
            </div>
            <Card className="infoTour"style={{color:'yellow',textAlign:'center',background: 'rgba(0,0,0, 0.5)'}}>
                <p>The International, often abbreviated as TI, is an annual tournament organized by Valve. 
                  In 2015 Valve increased their number of hosted events, 
                  founding the Dota Major Championships which incorporates The International into its
                   structure. The International remains the biggest and most prestigious event on the Major Championship circuit.
                   The prize pool for The International 2019 was US$33 million championship prize</p>
                    <a href="https://www.twitch.tv/dota2ti"style={{color:'yellow',fontSize:'30px'}}>Twitch Stream</a>
                    <h5 style={{paddingTop:'20px'}}>Begin date: 7th July 2021</h5>
                    <h5>End date: 26th August 2021</h5>
            </Card>

        </div>
      <div className="col-6">
        <div className="card" >
          <div className="card-body">
            <div className="table-wrapper">
            <table className="table table-dark table-hover table-bordered table-striped table-fixed">
              <thead class="thead thead-dark">
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
                    <p
                    className="list-group-item list-group-item-action list-group-item-warning">Winner The International 2020 - Cancelled</p>
                    <a href="https://dota2.gamepedia.com/The_International_2019" 
                    className="list-group-item list-group-item-action list-group-item-warning">Winner The International 2019 - OG</a>
                    <a href="https://dota2.gamepedia.com/The_International_2018" 
                    className="list-group-item list-group-item-action list-group-item-warning">Winner The International 2018 - OG</a>
                    <a href="https://dota2.gamepedia.com/The_International_2017" 
                    className="list-group-item list-group-item-action list-group-item-warning">Winner The International 2017 - Team Liquid</a>
                    <a href="https://dota2.gamepedia.com/The_International_2016" 
                    className="list-group-item list-group-item-action list-group-item-warning">Winner The International 2016 - Wings Gaming</a>
                    <a href="https://dota2.gamepedia.com/The_International_2015" 
                    className="list-group-item list-group-item-action list-group-item-warning">Winner The International 2015 - Evil Geniuses</a>
                    <a href="https://dota2.gamepedia.com/The_International_2014" 
                    className="list-group-item list-group-item-action list-group-item-warning">Winner The International 2014 - NewBee</a>
                  </div>
      <div style={{float:'left',marginTop:'50px',marginLeft:'20px'}}>
          <Link to="/dota2/upcoming"><Button variant="warning" style={{float:'left'}}>Back to Matches</Button></Link>
      </div>
    </div>
    </div>
    </div>
    </section>
    </div>


          )
      }
}