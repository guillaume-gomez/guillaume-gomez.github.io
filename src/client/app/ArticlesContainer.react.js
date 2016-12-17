import React from 'react';

import { t } from "./Translations";
import Article from "./Article.react";

const nbArticles = 5;

class ArticlesContainer extends React.Component {

  constructor(props){
    super(props);
    this.renderPagination = this.renderPagination.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  renderPagination(){
    const { children } = this.props;
     if(!Array.isArray(children)) {
      return null;
    }
    const nodes = children.map((child, index) => {
      return (<li key={index}><a href="">{index+1}</a></li>);
    })
    return (
      <div className="row text-center">
        <div className="col-sm-12">
          <ul className="pagination">
            <li key="first"><a href="">«</a></li>
            {nodes}
            <li key="last"><a href="">»</a></li>
          </ul>
        </div>
      </div>
    );
  }

  renderChildren() {
    const { children } = this.props;
    if(!Array.isArray(children)) {
      return children;
    }

    return children.map((child, index) => {
      return (
        <span key={index}>
          {child}
          <hr/>
        </span>
      );
    });
  }

  render () {
    const { locale, title, children } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-header">{title}</h1>
          </div>
        </div>
        {this.renderChildren()}
      </div>
    );
  }
}

ArticlesContainer.propTypes = {
  title: React.PropTypes.string
};

ArticlesContainer.defaultProps = {
  title: 'Page header'
};

export default ArticlesContainer;