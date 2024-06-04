import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import "./myStyles.css";


const style = {
  backgroundColor: "rgb(230, 52, 52)",
  height: "100",
  width:'100%',
  padding: 13,
  marginTop: -10,
  paddingRight: 0,
  marginLeft: -10,
  marginRight: -10,
  textAlign: "center",
  fontFamily: "Georgia",
  fontSize: 20,

};

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="topnav" style={style}>
        <Navbar
          fixed="top"
          expand="lg"
          bg="dark"
          variant="dark"
          className="topnav"
        >
          <Navbar.Brand href="">V-Canteen</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default HeaderBar;