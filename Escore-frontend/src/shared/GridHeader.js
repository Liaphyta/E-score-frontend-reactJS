import React from 'react';
import { Grid, Paper } from '@material-ui/core';

export default class GridHeader extends React.Component {

  constructor(props) {
    super(props)
    this.state ={
      formdata: {}
    }
  }

  
  render(){
    return (
      <p className="grid-header">
          {this.props.titleText}
      </p>
    );
  }

}
