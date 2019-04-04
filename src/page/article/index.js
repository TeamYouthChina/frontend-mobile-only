import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {isLogin} from '../../tool/api-helper';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {setToken} from '../../tool/set-token';

import Title from './containers/title';
import Content from './containers/content';
import Footer from './containers/footer';
import Comments from './components/comments';
import {QuestionCard} from '../../general-component/question-card';
import data from './data';
import classes from './index.module.css';

export class Article extends React.Component {
  constructor(props) {
    super(props);
    // i18n
    this.text = Article.i18n[languageHelper()];
    this.state={
      backend:null
    };
  }

  componentDidMount() {
    this.setState({
      backend:data.content
    });
  }

  render() {
    // get token from query string in URL
    setToken(this.props.location.search);
    // make sure user has logged in
    if (!isLogin()) {
      this.props.history.push('/unauthorized');
    }
    // remove redundant slash (/)
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname} />);
    }
    // render
    return (this.state.backend !== null) ? (
      <div style={{backgroundColor: '#F0F3FA'}}>
        <div
          className="cell-wall"
          style={{backgroundColor: '#FFFFFF'}}
        >
          <div
            className="cell-membrane"
          >
            <span>article</span>
            <Title 
              username={this.state.backend.username} 
            />
            <Content 
              content={this.state.backend.content} 
              title={this.state.backend.title} 
            />
            <Footer 
              tags={this.state.backend.tags} 
            />
            <Comments />
          </div>
        </div>
        <div
          className="cell-wall"
        >
          <div
            className="cell-membrane"
          >
            <p className={classes.recommand}>推荐阅读</p>
          </div>
        </div>
        
        <div
          className="cell-wall"
          style={{backgroundColor: '#FFFFFF'}}
        >
          <div
            className="cell-membrane"
          >
            <QuestionCard />
          </div>
        </div>
      </div>
    ) : (
      <div>
        loading
      </div>
    );
  }
}

Article.i18n = [
  {},
  {}
];

Article.propTypes = {
  // self

  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
