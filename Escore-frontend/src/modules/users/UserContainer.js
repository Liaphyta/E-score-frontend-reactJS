import React from 'react';
import { Paper, Grid, Container, FormControl, Select, InputLabel, Button, Link, TableCell, TableHead, Table, TableRow
, TableBody, Fab, Icon, TablePagination} from '@material-ui/core';
import GridHeader from '../../shared/GridHeader';
import { getAllUsers, getUserById, deleteUser } from './UserRepo';
import { MAIN_LINEAR_PROGRESS_HIDE, MAIN_SNACKBAR_SHOW, MAIN_LINEAR_PROGRESS_SHOW } from '../../shared/actions/MainActions';
import { dispatchAction } from '../..';
import { fil } from 'date-fns/esm/locale';
import { Tab } from 'material-ui';
import { hasRole } from '../../App';
import {Redirect} from 'react-router-dom';


export default class UserContainer extends React.Component{


    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: {}
        }
      }

      getStripedStyle(index) {
        return { background: index % 2 ? '#baece8' : '#fafafa' };
      }

      componentDidMount(){
        this.loadUsers(0,5,"");
        console.log('mount!');
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.reloadUsers){
            if(this.state.data.data && this.state.data.data.number && this.state.data.data.size && this.state.data.data.filter){
                this.loadUsers(this.state.data.data.number,this.state.data.data.size, this.state.data.data.filter);
            }
            else{
            this.loadUsers(0, 5, "");
            }
            dispatchAction({
            type: "RELOAD ALL USERS SUCCESS",
            payload: {}
          });
        }
    }

      formatDate = (dateString) => {
        var newDateStringArr = dateString.split('T');
        newDateStringArr[1] = newDateStringArr[1].split('.000Z')[0];
        return newDateStringArr[0] + ' ' + newDateStringArr[1];
      }

      onChangeRowsPerPage = (event) => {
        this.loadUsers(0, event.target.value, "");
    }
      handleChangePage = (event, page) => {
        if(this.state.data && this.state.data.data && this.state.data.data.size){
            this.loadUsers(page, this.state.data.data.size,"");
        }
        else{
          this.loadUsers(page, 5,"");
        }
    }

    loadUsers = (page, size, filter) => {
      dispatchAction({
          type: MAIN_LINEAR_PROGRESS_SHOW
      });
      getAllUsers(page, size, filter).then(response => {
        console.log(response);
        this.setState({
          
          data: response
      },
      dispatchAction({
          type: MAIN_LINEAR_PROGRESS_HIDE
      })
      );
        console.log(response);
      }).catch(error => {
        dispatchAction({
          type: MAIN_LINEAR_PROGRESS_HIDE
      });
        console.log(error);
      });
    }

    handlePermissionName = (name) => {
      if(name == "MICRO_FARMER"){
        var permisionRole = "full_access";
      }
      else if(name == "DEVICE_SUPPLIER"){
        var permisionRole = "can_modify_api";
      }
      else if(name == "SEED_SUPPLIER"){
        var permisionRole = "can_c_campaiagn,can_r_campaign,can_u_campaign,can_d_campaign, can_c_contact_list,can_r_contact_list,can_u_contact_list,can_d_contact_list";
      }
      else if(name == "ADMIN") {
        var permisionRole="can_search_account_numbers";
      }
      else {
        var permisionRole = "can_r_campaign,can_c_contact_list";
      }
      return permisionRole;
    }

    handleDelete = (id) => {
      this.setState({
          linearProgressShown: true
      });
        deleteUser(id).then( response => {
          this.loadUsers(0,10,"");
          dispatchAction({
              type: MAIN_SNACKBAR_SHOW,
              payload: {
                  snackbarMessage: 'Successfully deleted a user!',
                  snackbarType: 'success'
              }
          });
          dispatchAction({
            type: "RELOAD_ALL_USERS_SUCESS",
            payload: {}
          });
          this.setRedirect();
          this.setState({
              linearProgressShown: false
          });
        }).catch(err => {
          console.log(err);
          
          this.setState({
              linearProgressShown: false
          });
        });
    }

      render(){
        return (
            <Grid container>
               {!hasRole("ROLE_ADMINISTRATION") &&
                    <Redirect to="/app/error/unauthorized" />
                }
                <Grid item md={12}>
                    <Paper className="papergriddiv">
                        <GridHeader titleText="User view" />
                        <Table>
                        <TableHead>
                          <TableRow>
                          <TableCell>
                            User ID
                          </TableCell>
                          <TableCell>
                              User Name
                          </TableCell>
                          <TableCell>
                              Roles
                          </TableCell>
                          <TableCell>
                            Permissions
                          </TableCell>
                          <TableCell>
                            Created at
                          </TableCell>
                          <TableCell>
                            Actions
                          </TableCell>
                          </TableRow>
                          </TableHead>
                          <TableBody>
                          { 
                          
                            this.state.data && this.state.data.data && this.state.data.data.content &&
                            this.state.data.data.content.map(item => {
                              return (
                                <TableRow key={item.id}>
                                  <TableCell>
                                    {item.id}
                                  </TableCell>
                                  <TableCell>
                                    {item.username}
                                  </TableCell>
                                  <TableCell style={{fontWeight: "bold"}}>
                                    {item.groups && item.groups[0] && item.groups[0].name}
                                  </TableCell>
                                  <TableCell>
                                    {this.handlePermissionName(item.groups[0].name)}
                                  </TableCell>
                                  <TableCell>
                                    {item.dateCreated && this.formatDate(new Date(item.dateCreated).toISOString())}
                                  </TableCell>
                                  <TableCell>
                                  <Link to={'/settings/users'} style={{textDecoration: 'none', color: 'white'}}>
                                      <Fab size="small" color="secondary" onClick={() => this.handleDelete(item.id)} aria-label="Delete" className="space-mrg-4">
                                        <Icon>delete</Icon>
                                      </Fab>
                                    </Link>
                                  </TableCell>
                                  </TableRow>
                                  )})
                                }
                                  </TableBody>
                          </Table>
                          <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={this.state.data.data ? this.state.data.data.totalElements : 0}
                            rowsPerPage={this.state.data.data ? this.state.data.data.size : 0}
                            page={this.state.data.data ? this.state.data.data.number : 0}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.onChangeRowsPerPage}
                            backIconButtonProps={{
                            'aria-label': 'Previous Page',
                          }}
                            nextIconButtonProps={{
                          'aria-label': 'Next Page',
                          }}
                          />
                    </Paper>
                </Grid>
            </Grid>
        );
      
      }
   
}
const mapStateToProps = state => {
  return {
    reloadUsers: state.contactsReducer.reloadAllUsers,
  }
};