import React from 'react';
import {Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoImage from '../../pictures/logoImage.png';
import EscoreLogo from '../../pictures/e-scoreLogo.png';
import iconLol from '../../pictures/iconLol.jpg';
import dota2Icon from '../../pictures/dota2Icon.png';
import csgoIcon from '../../pictures/csgoIcon.jpg';
import FaceIcon from '@material-ui/icons/Face';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export function NavBar(props) {

  let history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("idm");
    localStorage.removeItem("me");
    localStorage.removeItem("username");
    history.push("/lol/upcoming"); 
  }
  
        return(
          <nav className="navbar navbar-expand-md navbar-dark bg-warning">
          <div className="d-flex w-50 order-0">
          <img style={{width:'50px',height:'60px'}}className="logo" src={LogoImage}/>
          <img style={{width:'120px'}}className="logo" src={EscoreLogo}/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div style={{width:'800px'}} className="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/lol/upcoming"><Button style={{color:'dark',whiteSpace:'nowrap',textAlign:'center'}}variant="warning">
                      <img style={{width:'20px'}} src={iconLol}/>League Of Legends</Button></Link>
                </li>
                <li className="nav-item">
                <Link to="/dota2/upcoming"><Button style={{color:'dark',whiteSpace:'nowrap',textAlign:'center'}} variant="warning">
                      <img style={{width:'20px'}} src={dota2Icon}/>Dota2</Button></Link>
                </li>
                <li className="nav-item">
                <Link to="/csgo/upcoming"><Button style={{color:'dark',whiteSpace:'nowrap',textAlign:'center'}}  variant="warning">
                      <img style={{width:'20px'}} src={csgoIcon}/>Counter Strike Global Offensive</Button></Link>
      
                </li>
            </ul>
        </div>
        <span className="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last">
          <Link to="/statistics"><Button style={{marginRight:'15px'}} variant="dark">Statistics</Button></Link>
          <Link to="/teams"><Button style={{marginRight:'15px'}} variant="dark">View Teams</Button></Link>
          {!localStorage.getItem("isLoggedIn")&&
          <Link to="/login"><Button style={{marginRight:'15px'}} variant="dark">Log in</Button></Link>}
          {localStorage.getItem("isLoggedIn")&&
          <span>
          <Link to="/profile"><Button style={{marginRight:'15px'}} variant="dark"><FaceIcon></FaceIcon></Button></Link>
          <Button onClick={logout.bind(this)} style={{marginRight:'15px'}} variant="dark"><ExitToAppIcon></ExitToAppIcon></Button>
          </span>
      }

        </span>
        </nav>
        )
}
NavBar.propTypes = {};

