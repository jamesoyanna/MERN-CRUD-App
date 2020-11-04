import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAllArticles } from './../../store/actions/articlesActions';
import Articles from "../../components/"
class Home extends Component {
    render() {
        return (
            <div>
               <h3>This is home conponent</h3>
            </div>
        );
    }
}

export default Home;
