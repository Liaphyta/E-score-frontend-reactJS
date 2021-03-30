import React from 'react';
import {connect} from 'react-redux'
import { Grid, Typography } from '@material-ui/core';

class UnauthorizedContainer extends React.Component {
    render() {

        return (

            <div>
            <Grid style={{marginTop:'10%'}}>
            <Typography style={{zoom:1.3}} align="center" component="h2" variant="display4" gutterBottom>401</Typography>
            <Typography align="center" component="h2" variant="display3" gutterBottom>Unauthorized Access!</Typography>
            <Typography align="center" component="h2" variant="display1" gutterBottom>Oops! You don't have permission to access this page.</Typography>
            </Grid>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, ({}))(UnauthorizedContainer);