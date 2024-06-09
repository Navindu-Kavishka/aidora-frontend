import { useState } from "react";
import PropTypes from 'prop-types';
import "./SideBar.css";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { NavLink, Outlet } from 'react-router-dom';

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/admin/admindashboard",
      name: "Dashboard",
      icon: <RiDashboard3Fill />,
    },
    {
      path: "/admin/admindonor",
      name: "Donor",
      icon: <FaHandHoldingDollar />,
    },
    {
      path: "/admin/adminfundraiser",
      name: "FundRaiser",
      icon: <BsBank2 />,
    },
    {
      path: "/admin/adminproject",
      name: "Project",
      icon: <AiFillProject />,
    },
    {
      path: "/admin/adminpayment",
      name: "Payments",
      icon: <MdPayments />,
    },
  ];

  return (
    <div className="containerAd">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="topSection">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Aidora Admin
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) => "link" + (isActive ? " active" : "")}
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="linkText"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <NavLink
          to="/logout"
          className={({ isActive }) => "link logout" + (isActive ? " active" : "")}
        >
          <div className="icon"><FiLogOut /></div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="linkText"
          >
            Logout
          </div>
        </NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

SideBar.propTypes = {
  children: PropTypes.node,
};

export default SideBar;
