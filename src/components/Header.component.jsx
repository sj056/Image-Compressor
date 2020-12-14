import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { slide as Menu } from 'react-burger-menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import './style.css';
let style={
    fontSize:"90",
    color: "#2ec1ac",
    fontFamily:"URW Chancery L, cursive",
    padding:"10"
}
var icons={
    height: "38px",
    width: "38px",
    color: "DimGray",
}
var link={
    padding:"0px",
    marginTop:"8px",
    marginBottom:"20px",
   
}
var menu={
  width:"100px",
}
const Header= ()=>{
    
    return (
    <div >
   <div className="text-center justify-content-center align-items-center" style={style}>
       <h1>Image Compressor</h1>
   </div>
   <Menu style={menu}>
            <a className="btn-floating btn-fb mx-3 col-xl-4 col-lg-4 col-md-12 col-sm-12 " href="https://github.com/sj056" style={link}>
              <GitHubIcon style={icons} />
            </a>
            <a className="btn-floating btn-tw mx-3 col-xl-4 col-lg-4 col-md-12 col-sm-12" href="https://www.linkedin.com/in/shruti-sharma-1b1b131a6/" style={link}>
              <LinkedInIcon style={icons}/>
            </a>
            <a className="btn-floating btn-gplus mx-3 col-xl-4 col-lg-4 col-md-12 col-sm-12" href="https://twitter.com/jangid006" style={link}>
              <TwitterIcon style={icons}/>
            </a>
    </Menu>
   </div>
    );
}
export default Header;