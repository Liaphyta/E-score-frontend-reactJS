import { Button, Card, Typography } from '@material-ui/core';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { championWithId } from './StatsRepo';
import DialogActions from '@material-ui/core/DialogActions';
import {CanvasJSChart} from 'canvasjs-react-charts'

export default class IndividualStatisticsContainer extends React.Component
{
    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: {},
        }
      }
    
      componentDidMount()
      {
        console.log(this.props.match.params.id);
        this.getChampion(this.props.match.params.id);
        console.log(this.state.data);
          
      }
      getChampion = (id) => {
        championWithId(id).then(response => {
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
        const options = {
			title: {
				text: this.state.data ? "Stats for the champion "+this.state.data.name : ' '
			},
            axisY:{
                   maximum: 100
                  },
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Attack Damage",  y: this.state.data.attackdamage  },
					{ label: "AttackDmg Per Level", y: this.state.data.attackdamageperlevel  },
					{ label: "Armor", y: this.state.data.armor  },
					{ label: "Hp Per Level",  y: this.state.data.hpperlevel  },
					{ label: "Magic Resistance",  y: this.state.data.spellblock  }
				]
			}
			]
		}
        return(
            <div>
            <Dialog open={true} fullWidth={true} maxWidth="lg"  aria-labelledby="responsive-dialog-title">
            <DialogTitle id="simple-dialog-title">Details for the champion {this.state.data ? this.state.data.name : ''}</DialogTitle>
                  <div><form noValidate autoComplete="off" maxWidth="lg" className="dialog-form-container" >
                    <img style={{paddingLeft:'25px',float:'left'}}src={this.state.data.big_image_url}></img>
                    <div style={{width:'930px',float:'right',textAlign:'center',paddingTop:'60px'}}>
                    <CanvasJSChart options = {options}/>  
                    </div>         
                        </form></div>

                        <DialogActions>
                            <Link to="/statistics">
                                <Button  color="secondary" variant="outlined">
                                Close
                                </Button>
                                </Link>
                        </DialogActions> 
          </Dialog>
          </div>
        )
        
    }
}