import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAllArticles } from './../../store/actions/articlesActions';
import Article from "../../components/Article/Article";
import WrappedLink from "../../components/WrappedLink/WrappedLink";
import "./Home.css";

class Home extends Component {
       state = {
           showArticles: false
       }

componentWillMount(){
    if(this.props.location.pathname === "/article/myarticle" && !this.state.showArticles){
        this.toggleShowMyArticles()
    }
}

componentDidMount(){
    this.props.initArticles();
    if(this.props.isAuthenticated) {
        this.props.getMyArticles()
    }
}

toggleShowMyArticles = () =>{
 this.setState((prevSate)=>{
     return {
         showMyArticles: !prevSate.showMyArticles
     }
 });
}

    render() {
        let allArtitcles =
          this.props.allArtitcles ||
          JSON.parse(localStorage.getItem("BasicMERNStackAppAllArticles"));
          allArtitcles = allArtitcles.map(article =>(
              <Article 
              key={article._id}
              id={article._id}
              title={article.title} />
          ));

          let myArticles = [];
          if(this.props.isAuthenticated && this.state.toggleShowMyArticles){
              if(this.props.myArticles){
                  myArticles = [...this.props.myArticles];
              } else {
                  myArticles = [
                    ...JSON.parse(
                      localStorage.getItem("BasicMERNStackAppAllArticles")),
                  ];
              }
          }




        return (
            <div>
               <h3>This is home conponent</h3>
            </div>
        );
    }
}

export default Home;
