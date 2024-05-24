import React, { useState } from 'react';
import "./SideBar.css"
import { RiDashboard3Fill } from "react-icons/ri";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const SideBar = ({ children }) => {
  const [isOpen , setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);


  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <RiDashboard3Fill />,
    },
    
    {
      path: "/admindonor",
      name: "Donor",
      icon: <FaHandHoldingDollar />,
    },
    {
      path: "/adminfundraiser",
      name: "FundRaiser",
      icon: <BsBank2 />,
    },
    {
      path: "/adminproject",
      name: "Project",
      icon: <AiFillProject />,
    },
    {
      path: "/adminpayment",
      name: "Payments",
      icon: <MdPayments />,
    }
  ];

  return (
    <div className="container">
      <div style={{width:isOpen ? "250px" : "50px"}} className="sidebar">
        <div className="topSection">
          <h1 style={{display:isOpen ? "block" : "none"}} className="logo">Aidora Admin</h1>
          <div style={{marginLeft:isOpen ? "50px" : "0px"}} className="bar">
            <FaBars  onClick={toggle}/>
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div style={{display:isOpen ? "block" : "none"}}  className="linkText">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
