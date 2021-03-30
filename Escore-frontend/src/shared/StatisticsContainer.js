import { Button, Card, List, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { NavBar } from '../modules/navbar/NavBar';
import { getChampionsRest } from './StatsRepo';
import './Statistics.css';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default class StatisticsContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: [],
        }
      }
      componentDidMount()
      {
          this.getChampions();
          
      }
      getChampions = () => {
        getChampionsRest().then(response => {
            this.setState({
              data:response.data
          },
          );
          }).catch(error => {
            console.log(error);
          });
    };
      render()
      {

          return(
            <div className="intro-header">
            <section className="view intro-2 rgba-gradient" style={{overflow:'auto'}}>
            <NavBar></NavBar>
            <Button variant="contained" color="secondary" style={{marginTop:'400px',float:'left',marginLeft:'10px'}}><ChevronLeftIcon/>Dota 2 statistics</Button>
            <Paper style={{maxHeight:'800px',overflow:'auto',position:'absolute',left:'50%',marginTop:'30px',marginLeft:'-750px',width:'1500px', boxShadow: 'none'}}>
                <List>
                    {   
                        this.state.data &&
                        this.state.data.map(item => {
                          return (
                            <Link to={'/statistics/'+item.id}>
                            <Button>
                           <div key={item.id} style={{padding:'10px',display:'inline-block',textAlign:'center',width:'120px',height:'120px'}}>
                               <img style={{width:'80px',height:'80px'}} src={item.image_url}></img>
                               <Typography style={{textAlign:'span'}}>{item.name}</Typography>
                           </div>
                           </Button>
                           </Link>
                          )})
               }
            </List>   
            </Paper>
            <Button variant="contained" style={{marginTop:'400px',float:'right',marginRight:'15px'}}>CS-Go Statistics<KeyboardArrowRightIcon/></Button>
            </section>
            </div>
          )
      }
}