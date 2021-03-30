import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../navbar/NavBar';
import { Link } from 'react-router-dom';
import { getTeams } from './TeamsRepo';
import './Teams.css';
import { Card } from '@material-ui/core';

export default class TeamsContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: []
        }
      }
      componentDidMount(){
        this.loadTeams();
    }
      loadTeams = () => {
        getTeams().then(response => {
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
    <div class="intro-header">
    <section class="view intro-2 rgba-gradient" style={{overflow:'auto'}}>
    <NavBar/>
    <div className="container-fluid" style={{color:'white'}}>
            <div className="row"style={{paddingTop:'150px'}}>
                {
                            
                            this.state.data &&
                            this.state.data.map(item => {
                              return (
                                <Card className="form-group col-4 offset-4" style={{textAlign:'center',collor:'yellow',background: 'rgba(0,0,0, 0.5)'}}>
                               <img src={item.imgSource} style={{height:'100px',width:'100px'}}/>
                                <br/>
                                <label style={{fontSize:'25px',color:'yellow'}}><b>{item.name}</b></label>
                                <p style={{color:'yellow'}}> {item.description }</p>
                                <span style={{color:'yellow'}}>Founded since: { item.foundedSince }</span>
                                <br/>
                                <a href={item.urlTeam} style={{color:'yellow'}}><b>Company Site</b></a>
                               </Card>
                              )})
                              
                   }
                        </div>
    </div>
    </section>
    </div>
          )
      }
}