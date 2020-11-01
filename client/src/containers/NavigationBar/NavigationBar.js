import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import {connect } from "react-redux";
import { userLogoutRequest } from './../../store/actions/usersActions';

class NavigationBar extends Component {
    render() {
          const userLinks = (
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item mr-2 mt-2">
                      Hello, {this.props.authenticateUsername}
                  </li>
                  <li className="nav-item">
                      <a className="btn btn-outline-primary" onClick={this.props.userLogoutRequest}>Logout</a>
                  </li>
              </ul>
          );


          const guestLinks = (
              <ul className="nav"
          )

        return (
            <div>
               <h2>This is Navigation bar</h2> 
            </div>
        );
    }
}

export default NavigationBar;
