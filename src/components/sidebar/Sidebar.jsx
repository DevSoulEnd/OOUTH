import "./sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/" className={(navClass) =>
                    navClass.isActive ? "active" : "sidebarListItem"
                  }>
            <li >
              Home
            </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <NavLink to="/appointments" className={(navClass) =>
                    navClass.isActive ? "active" : "sidebarListItem"
                  }>
              <li >
                Appointments
              </li>
            </NavLink>
            <NavLink to="/profile" className={(navClass) =>
                    navClass.isActive ? "active" : "sidebarListItem"
                  }>
              <li>
                Profile
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}