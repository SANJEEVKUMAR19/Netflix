import React,{useEffect,useState} from 'react'
import "./nav.css"


function Nav() {

    const[show,handleShow]= useState(false);
    useEffect(() => {
       window.addEventListener("scroll",()=>{
           if(window.scrollY > 100){
               handleShow(true)
           }
           else handleShow(false)
       })
        return () => {
           window.removeEventListener('scroll');
        }
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix-logo" />
        
         <ul className={`nav1 ${show && " nav_black"}`}>
            <li><a href="#" >Home</a></li>
            <li><a href="#">TV Shows</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Latest</a></li>
            <li><a href="#">My List</a></li>
         </ul>
         </div> 
    )
}

export default Nav;
