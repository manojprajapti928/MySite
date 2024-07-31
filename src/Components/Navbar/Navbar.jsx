import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {

  const [bgColor, setBgColor] = useState({marginTop:"0px"});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setBgColor({marginTop:"-270px"});
      }  else if (window.scrollY<100) {
        setBgColor({marginTop:"0px"});
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
   

  return (
    <>
      <nav className="nav"  style={ bgColor }>
        <img src="https://static.vecteezy.com/system/resources/previews/024/553/534/non_2x/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png" alt="" />
        
        <div className="navlink">
          <Link to="/">Home</Link>
          <Link to="/service">Service</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}
