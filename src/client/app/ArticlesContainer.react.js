import React from 'react';

import { t } from "./Translations";

class ArticlesContainer extends React.Component {

  constructor(props){
    super(props);
  }

  renderPagination(){
    return (
      <div className="row text-center">
        <div className="col-sm-12">
          <ul className="pagination">
            <li><a href="">«</a></li>
            <li><a href="">»</a></li>
          </ul>
        </div>
      </div>
    );
  }

  render () {
    const { locale } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-header"> Page header</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <img className="image-responsive" src="http://placehold.it/600x300"/>
            <a href="#"></a>
          </div>
          <div className="col-md-5">
            <h3> Project One</h3>
            <h4> Subheading </h4>
            <p>Subheading fdsjkvjsdv d sv kd jfkdlndsks kdsjdgldsgqslkgjqdklg kgjdkgqkdsljgkldsqgj kjqgkdlgjkldsgjdkgjlsqgjk</p>
            <a className="btn btn-primary" href="#">
              View project 
              <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-7">
            <img className="image-responsive" src="http://placehold.it/600x300"/>
            <a href="#"></a>
          </div>
          <div className="col-md-5">
            <h3> Project Two</h3>
            <h4> Subheading </h4>
            <p>Subheading fdsjkvjsdv d sv kd jfkdlndsks kdsjdgldsgqslkgjqdklg kgjdkgqkdsljgkldsqgj kjqgkdlgjkldsgjdkgjlsqgjk</p>
            <a className="btn btn-primary" href="#">
              View project 
              <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
        </div>
        <hr/>
        
      </div>
    );
  }
}

export default ArticlesContainer;