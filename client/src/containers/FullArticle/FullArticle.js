import React, { Component } from 'react';
import { connect } from "react-redux";
import { getArticle, deleteArticle } from "../../store/actions/articlesActions";
import WrappedLink from './../../components/WrappedLink/WrappedLink';
import "./FullArticle.css"

class FullArticle extends Component {
    componentDidMount(){
        this.getSingleArticle()
    }

    getSingleArticle(){
        if(this.props.match.params.id){
            if(!this.props.article || (this.props.article._id !== + this.props.match.params.id)){
                this.props.getArticle(this.props.match.params.id);
            }
        }
    }

   handleEditArticleClick(){
       this.props.history.replace({pathname: "/article/edit/" + this.props.match.params.id})
   }

   handleDeletArticleClick(){
       alert("We are deleting your articlle...");
       this.props.deleteArticle(this.props.match.params.id)
       .then(res =>{
        if(res.success){
            this.props.history.push("/");
        }
       })
   }

    render() {
        return (
            <div className="container">
                <br />
                <div className="jumbotron FullArticle">
        <h3 className="text-center">{this.props.article.title}</h3>
        <h5 className="text-right">-By {this.props.article.author}</h5>
        <p>{this.props.article.body}</p>
        {this.props.isAuthenticated && this.props.authenticatedUsername === this.props.article.author
        && <button
        className="btn btn-danger"
        style={{float: "right" ,padding: "6px 12px"}}
        onClick={()=>this.handleDeletArticleClick()}>Delete</button>
        {this.props} 
        }
                </div>
                <div class="text-center">{this.props.article.title}</div>
                
            </div>
        );
    }
}

export default FullArticle;
