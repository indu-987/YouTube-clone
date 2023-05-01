import Logo from "../image/logo.png";
import "../styles/navbar.css";
import Profile from "../image/profile.png";
import Notification from "../image/notification.png";
import { Link } from "react-router-dom";
import plogo from '../image/indu.jpg'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
       <img src={Logo} alt="" />
      </div>

      <div className="searchbar">

      <input type="text" placeholder="search" className="Inp"/>
      
      </div>


      <div className="profile">
         
      <Link  to="/about"  style={ {textDecoration:"none", padding:"3px 20px",border:"solid black 1px",margin:"0px 10px"}}>
      About</Link>
      <Link to="/addvideos" style={ {textDecoration:"none", padding:"3px 20px",border:"solid black 1px" ,margin:"0px 10px"}}>
         AddVideos </Link> 
     <img src={Notification} alt="/" />
     <img className="profiles" src={plogo} alt="" />
     
      </div>


      
    </div>
  );
};

export default Navbar;
