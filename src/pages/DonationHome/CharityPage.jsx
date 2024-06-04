//import React from "react";
import "./CharityPage.css";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

import ProgressBar from "../Homemiddle/ProgressBar";
const CharityPage = () => {
  const percentage = 100;

  const getProgressColor = (percentage) => {
    if (percentage >= 75) return "#4caf50"; // Green for 75% and above
    if (percentage >= 50) return "#ffc107"; // Yellow for 50% and above
    return "#f44336"; // Red for below 50%
  };

  return (
    <div>
      
     
      <div className="charitypage">

        <div className="row first-row">
          <div className="column image-column">
            <img className="child" src="images/child2.png" alt="Child" />
          </div>
          <div className="column text-column">
            <div>
              {" "}
              <div className="header">
                Providing access to safe water, sanitation and hygiene
              </div>
              <div className="subtext">
                The legal definition of a charitable organization (and of
                charity) varies between countries
              </div>
            </div>

            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaWhatsapp className="icon" />
              <FaInstagram className="icon" />
            </div>
          </div>
        </div>
      </div>
      <ProgressBar />
    </div>
  );
};

export default CharityPage;
