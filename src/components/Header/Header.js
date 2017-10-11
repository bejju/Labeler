import React, {Component} from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import logo from '../../../public/assets/images/linkedin.png';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router'

class Header extends Component {
  NavigateToLogin() {
    if (window.location.href.indexOf('login') == -1) {
      window.location.href = '/pageNotFound';
    }
  }
  render() {
    return (
      <div id='header' className= 'hold-transition skin-black-light sidebar-mini'>
        <div className='main-header'>
        <Navbar className='navbar navbar-fixed-top'>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" className="logo">
                <span className="logo-lg"> /*<img src={logo} className='brand-logo' alt="User Image" />*/ <b>Labeler</b></span>
            </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav className="navbar navbar-fixed-top">
                <a href="#" className="sidebar-toggle hidden-sm hidden-md hidden-lg" data-toggle="offcanvas" role="button">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav hidden-xs">
                        <li className="hidden-sm">
                            <a href="downloads.html">
                                <i className="fa fa-download"></i><span className="main-nav-text">Your Document sets</span></a>
                        </li>
                        <li>
                            <a href="notifications.html">
                                <i className="fa fa-house"></i>  <span className="main-nav-text">Notifications</span></a>
                        </li>
                    </ul>
                </div>
            </Nav>
        </Navbar>
        
        </div>
      </div>
    )
  }
}

export default Header;
