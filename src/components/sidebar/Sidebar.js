import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaMoneyBill,
    FaPersonBooth,
    FaPeopleArrows,
    FaThList,
    FaAndroid,
    FaSchool,
    FaHandPointUp
  
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Accueil",
            icon:<FaTh/>
        },
        {
            path:"Personnel",
            name:"Personnel",
            icon:<FaUserAlt/>
        },
        {
            path:"Comptabilite",
            name:"Comptabilite",
            icon:<FaMoneyBill/>
        },
        {
            path:"Eleves",
            name:"Eleves",
            icon:<FaPersonBooth/>
        },
        {
            path:"Professeur",
            name:"Professeur",
            icon:<FaPeopleArrows/>
        },
        {
            path:"Authentification",
            name:"Authentification",
            icon:<FaThList/>
        },
        {
            path:"Droit",
            name:"Droit",
            icon:<FaAndroid/>
        },
        {
            path:"Role",
            name:"Role",
            icon:<FaThList/>
        },
        {
            path:"Scolarite",
            name:"Scolarite",
            icon:<FaSchool/>
        },
        {
            path:"Pointage",
            name:"Pointage",
            icon:<FaHandPointUp/>
        }
      

      
      

      
    ]
    return (
        <div className="container" style={{float:'left'}}>
           <div style={{width: isOpen ? "200px" : "50px",}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Hackathon</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active"  >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text ">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;