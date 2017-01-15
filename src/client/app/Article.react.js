import React from 'react';

class Article extends React.Component {

  constructor(props){
    super(props);
  }

  render () {
    const { title, subtitle, content, buttonText, href, githubUrl, languages} = this.props;
    return (
      <div className="row">
        <div className="col-md-7">
          <img className="image-responsive" src={href} width="650"/>
          <a href="#"></a>
        </div>
        <div className="col-md-5">
          <h3> {title}</h3>
          <h4> {subtitle} </h4>
          <p>{content}</p>
          <p>Technologies : <small>{languages}</small></p>
          <a className="btn btn-primary" target="_blank" href={githubUrl}>
            {buttonText} 
            <span className="glyphicon glyphicon-chevron-right"></span>
          </a>
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  content: React.PropTypes.string,
  buttonText: React.PropTypes.string,
  href: React.PropTypes.string,
  githubUrl: React.PropTypes.string,
  languages: React.PropTypes.string
};

Article.defaultProps = {
  title: 'Big Project',
  subtitle: "",
  content: "Super content",
  buttonText: "View Project",
  href: "http://placehold.it/600x300",
  githubUrl: "https://github.com/guillaume-gomez",
  languages: ""

};

export default Article;

