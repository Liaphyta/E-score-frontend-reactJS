import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../navbar/NavBar';
import './LolPreviousMatchesContainer.css';
import { Link } from 'react-router-dom';
import { Card, Grid } from '@material-ui/core';
import lcsLogo from '../../pictures/lcs_logo.jpg';
import lecLogo from '../../pictures/lecLogo.png';
import lplLogo from '../../pictures/lplLogo.png';
import pcsLogo from '../../pictures/pcsLogo.png';
import cblol from '../../pictures/cblol.png';
import lclLogo from '../../pictures/lclLogo.png';
import ljlLogo from '../../pictures/ljlLogo.png';
import llaLogo from '../../pictures/llaLogo.png';
import tclLogo from '../../pictures/tclLogo.png'


export default class LolNetworkContainer extends React.Component
{
    constructor(props) {
        super(props)
        this.state ={
        }
      }
      componentDidMount(){
    }
      render(){
          return (
            <div className="intro-header">
              <NavBar/> 
            <section className="view intro-2 rgba-gradient1">
              <div className="full-bg-img1" style={{paddingTop:'10%'}}>
                <Grid style={{}}>
                <div className="title">
                    <h1 style={{color:'	rgb(32,32,32)'}}>Please choose a competition league</h1>
                </div>     
                    <div className="buttons" style={{paddingBottom:'10%'}}>
                    <div className="buttons-class" style={{width:'80%'}}>
                    {/*  */}
                     <Link to="/lol/network/LCK"><Button style={{margin:'20px'}} variant="warning"><img style={{width:'25px'}} 
                     src={'https://upload.wikimedia.org/wikipedia/en/1/13/League_of_Legends_Champions_Korea_logo.svg'}/> LCK - Korea</Button></Link> 
                     <Link to="/lol/network/LCS"><Button style={{margin:'20px'}} variant="warning"><img style={{width:'25px'}}
                      src={lcsLogo}/> LCS - USA</Button></Link>
                      <Link to="/lol/network/LEC"><Button style={{margin:'20px'}} variant="warning"><img style={{width:'25px'}}
                      src={lecLogo}/> LEC - Europe</Button></Link> 
                      <Link to="/lol/network/LPL"><Button style={{margin:'20px'}} variant="warning"><img style={{width:'25px'}}
                      src={lplLogo}/> LPL - China</Button></Link> 
                      <Link to="/lol/network/PCS"><Button style={{margin:'20px'}} variant="warning"><img style={{width:'25px'}}
                      src={pcsLogo}/> PCS - Taiwan,Hongkong</Button></Link>
                      <Link to="/lol/network/CBLOL"><Button style={{margin:'20px'}} variant="warning"><img style={{width:'25px'}}
                      src={cblol}/> CBLOL - Brazil</Button></Link> 
                      <Link to="/lol/network/LCL"><Button style={{margin:'20px'}} variant="warning"><img style={{width:'25px'}}
                      src={lclLogo}/> LCL - Russia</Button></Link> 
                      <Link to="/lol/network/LJL"><Button style={{margin:'20px'}} variant="warning"><img style={{width:'25px'}}
                      src={ljlLogo}/> LJL - Japan</Button></Link> 
                      <Link to="/lol/network/LLA"><Button style={{margin:'20px'}} variant="warning"><img style={{width:'25px'}}
                      src={llaLogo}/> LLA - Latin America</Button></Link> 
                      <Link to="/lol/network/TCL"><Button style={{margin:'20px'}} variant="warning"><img style={{width:'25px'}}
                      src={tclLogo}/> TCL - Turkey</Button></Link> 
                    </div>
                  </div>
                  </Grid>                
              </div>  
            </section>
          </div>
          )
      }
}