import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
                <button className="navbar-brand">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default NavBar;