import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import GridHeader from '../../shared/GridHeader';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../navbar/NavBar';
import {Link} from "react-router-dom";



export default class ContactsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state ={
      formdata: {}
    }
  }
  
  render(){
    
    return (
      <div className="intro-header">
        <section className="view intro-2 rgba-gradient">
          <div className="full-bg-img">
            <div className="header-text">
                <h1>Please choose a game</h1>
            </div>     
                <div className="buttons">
                <div className="buttons-class text-center text-md-left margins">
                <Link to="/lol/upcoming"><Button style={{margin:'20px'}} variant="outline-primary">League Of Legends</Button></Link>
                 <Link to="/dota2/upcoming"><Button style={{margin:'20px'}} variant="outline-danger">Dota 2</Button></Link> 
                 <Link to="/csgo/upcoming"><Button style={{margin:'20px'}} variant="outline-warning">Counter Strike Global Offensive</Button></Link>
                  {/* <a routerLink="/lolUmatches"><button style="margin:20px"type="button" class="btn btn-outline-primary">League Of Legends</button></a>
                  <a routerLink="/dota2Umatches"><button style="margin:20px" type="button" class="btn btn-outline-danger">Dota 2</button></a>
                  <a routerLink="/csgoUmatches"><button style="margin:20px"type="button" class="btn btn-outline-warning">Counter Strike Global Offensive</button></a> */}
                </div>
              </div>
          </div>  
        </section>
      </div>
        
    );
  
  }

}
