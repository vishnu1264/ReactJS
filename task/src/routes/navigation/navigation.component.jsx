// import "./navigation.styles.scss";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.css'
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to='/'>
          Home
        </Link>
        <Link to='/contact'>
          Contact
        </Link>
        <Link to='/about'>
          About
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
