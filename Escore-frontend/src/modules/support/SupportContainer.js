import React from 'react';
import {Grid,Paper} from '@material-ui/core';
import GridHeader from '../../shared/GridHeader';
export default class SupportContainer extends React.Component{
    render(){
        return(
            <Grid container>
            <Grid item md={12}>
                <Paper className="papergriddiv">
                    <GridHeader titleText="Support" />
                    <div>In case of any questions or problems, please contact us on email. </div>
                </Paper>
            </Grid>
        </Grid>
        )
    }
}