import { Grid,Paper } from '@material-ui/core';
import React from 'react';
import { NavBar } from '../navbar/NavBar';
import { GraphLeagues } from './GraphLeagues';
import { getFixtures, getNodes,getEdges,getGraph,getTeams,getGraphByTeamAndLeague } from './LeagueOfLegendsRepo';
import Graph from "react-graph-vis";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import iconLol from '../../pictures/iconLol.jpg';


export default class LolLeagueNetworkContainer extends React.Component
{
    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          teams: [],
          data: {},
          graph: {
            nodes: [
              { id: "Node 1", label: "Node 1", title: "node 1 tootip text" ,  color: "#ffc107" },
              { id: "Node 2", label: "Node 2", title: "node 2 tootip text" },
              { id: 3, label: "Node 3", title: "node 3 tootip text" },
              { id: 4, label: "Node 4", title: "node 4 tootip text" },
              { id: 5, label: "Node 5", title: "node 5 tootip text", color: 'Green' }
            ],
            edges: [
              { from: "Node 1", to: "Node 2",label:"dddddd" },
              { from: 'Node 1', to: 3,label:'adasd' },
              { from: 'Node 2', to: 4 },
              { from: 'Node 2', to: 5 }
            ]
          },
          options: {
            layout: {
              hierarchical: false
            },
            edges: {
              color: "#343c44"
            },
            height: "475px",
          },
          
           events: {
            select: function(event) {
              var { nodes, edges } = event;
            }
          }
        }
      }
      loadAllFixtures = () => {
        getFixtures(this.props.match.params.league).then(response => {
          this.setState({
            data: response.data
        },
        );
        }).catch(error => {
          console.log(error);
        });
      }
      loadTeams = () => {
        getTeams(this.props.match.params.league).then(response => {
          this.setState({
            teams: response.data
        },
        );
        }).catch(error => {
          console.log(error);
        });
      }
      loadAllEdges = () => {
        getEdges(this.props.match.params.league).then(response => {
          console.log("EDGES")
          console.log(response.data)
          this.setState({
            graph:{
              edges : response.data
            }
        },
        );
        }).catch(error => {
          console.log(error);
        });
      }
      loadGraph = () => {
        getGraph(this.props.match.params.league).then(response => {
          this.setState({
              graph : response.data
        },
        );
        }).catch(error => {
          console.log(error);
        });
      }
      loadGraphByTeam = (league,team) => {
        getGraphByTeamAndLeague(league,team).then(response => {
          this.setState({
              graph : response.data
        },
        );
        }).catch(error => {
          console.log(error);
        });
      }
      loadAllNodes = () => {
        getNodes(this.props.match.params.league).then(response => {
          this.setState({
            graph:{
              nodes : response.data
            }
        },
        );
        }).catch(error => {
          console.log(error);
        });
      }
      sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
      componentDidMount()
      {
        // console.log(this.props.match.params.league);
        // this.loadAllFixtures()
        
        // setTimeout(() => {  this.loadAllNodes() ; }, 1000)
        // this.loadAllEdges();
        this.loadTeams();
        console.log(this.state.teams)
        this.loadGraph();
        // this.loadGraphByTeam(this.props.match.params.league,'Fnatic');
      }
      filterResults()
      {
        // fixtures=this.state.data;

      }
    render()
    {

        return(
          <div className="intro-header">
          <section style={{overflow:'auto'}} className="view intro-2 rgba-gradient">
          <NavBar/>
          <Grid container style={{marginTop:'1%'}}>
            <Grid style={{marginTop:'10px',paddingLeft:'10px',textAlign:'center'}}item xs={4}>
            <Paper style={{maxHeight:'520px',overflow:'auto'}}elevation={4}>
            <h2 style={{color:'#ffc107',textAlign:'center'}}>Teams:</h2>
            {
              this.state && this.state.teams.map(item => {
                return (
                 <Button onClick={() => this.loadGraphByTeam(this.props.match.params.league,item)}
                 style={{width:'95%',margin:'1%'}} variant="warning">
                    <img style={{width:'20px'}} src={iconLol}/> {item}</Button>
                )
              })
            }

            </Paper>
            </Grid>
            <Grid item xs={8}>
            <Paper elevation={3} style={{margin:'10px',maxHeight:'520px'}}>
                            <h2 style={{color:'#ffc107',textAlign:'center'}}>Competition league history network - {this.props.match.params.league}</h2>
              {/* <GraphLeagues/> */}
              <Graph
          graph={this.state.graph}
          options={this.state.options}
          events={this.state.events}
          getNetwork={network => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
          }}
        />
        {console.log(this.state.graph.edges)}
        {console.log(this.state.graph.nodes)}

              </Paper>

            </Grid>
          </Grid>
          </section>
          </div>
        )
        
    }
}