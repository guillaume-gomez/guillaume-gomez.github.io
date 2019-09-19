import React from 'react';
import { t } from "./Translations";


class Article extends React.Component {

  constructor(props){
    super(props);
  }

  render () {
    const { languages, year, name, locale } = this.props;
    return (
      <div className="row">
        <div className="col-md-7 fadein">
          <img className="image-responsive" src={t(locale, `${name}_href`)} width="650"/>
          <a href="#"></a>
        </div>
        <div className="col-md-5">
          <h2> <b> {t(locale, `${name}_title`)} </b> </h2>
          <h4> <em> {t(locale, `${name}_subtitle`)} </em></h4>
          <p>{t(locale, `${name}_content`)}</p>
          <p>Technologies : <small>{languages}</small></p>
          <p><small>{year}</small></p>
          <a className="btn btn-primary my-button" target="_blank" href={t(locale, `${name}_githubUrl`)}>
            {t(locale, `${name}_buttonText`)}
            <span className="glyphicon glyphicon-chevron-right"></span>
          </a>
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  languages: React.PropTypes.string,
  name: React.PropTypes.string,
  year: React.PropTypes.string,
  locale: React.PropTypes.object
};

Article.defaultProps = {
  languages: "",
  name: "",
  year: "",
};

export default Article;

