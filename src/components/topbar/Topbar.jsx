import React from "react";
import "./topbar.css";
import {GoMail} from 'react-icons/go'
import {FiSettings} from 'react-icons/fi'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">OOUTH</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <GoMail className="sidebarIcon"/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <FiSettings className="sidebarIcon"/>
          </div>
        </div>
      </div>
    </div>
  );
}