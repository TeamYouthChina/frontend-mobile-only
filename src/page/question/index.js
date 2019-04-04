import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Link} from 'react-router-dom';

import {isLogin} from '../../tool/api-helper';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {setToken} from '../../tool/set-token';

import QuestionDes from './containers/description';
import QuestionCard from './containers/questionCard';
import QuestionFooter from './containers/footer';
import data from './data';
import classes from './index.module.css';
import createPic from './public/create.svg';

export class Question extends React.Component {
  constructor(props) {
    super(props);
    // i18n
    this.text = Question.i18n[languageHelper()];
    this.state = {
      backend: null,
      show: false
    };
  }

  componentDidMount() {
    let show = this.props.match.params.aid === undefined;
    if (!show && data.content.answerLists[this.props.match.params.aid] === undefined) {
      return (
        <Redirect to='/page-no-found' />
      );
    }
    this.setState(() => ({
      backend: data.content,
      show
    }));
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
    const backend = this.state.backend;
    const aid = this.props.match.params.aid;
    // render
    return (this.state.backend !== null) ? (
      <div style={{backgroundColor: '#E5E5E5'}}>
        <div
          className={`cell-wall ${classes.question}`}
        >
          <div
            className="cell-membrane"
          >
            <QuestionDes
              title={this.state.backend.title}
              count={this.state.backend.answerLists.length}
              des={this.state.backend.des}
              detail={this.state.backend.detail}
              show={this.state.show}
            />
          </div>
        </div>
        <div
          className="cell-wall"
        >
          <div
            className="cell-membrane"
          >
            {this.state.show && (
              <p className={classes.answerCount}>{this.state.backend.answerLists.length}个回答</p>
            )}
          </div>
        </div>
        {this.state.show === true ? (
          <div>
            {this.state.backend.answerLists.map((item) => (
              <div key={item.id} className={`cell-wall ${classes.question2}`}>
                <div className="cell-membrane">
                  <QuestionCard
                    des={item.des}
                    content={item.content}
                    agree={item.agree}
                    comment={item.comment}
                    show={this.state.show}
                  />
                </div>
              </div>
            ))}
            <Link to={''} className={classes.writeAns}>
              <img src={createPic} alt="createPic" />
              <div className={classes.writeSpan}>写回答</div>
            </Link>
          </div>
        ) : (
          <div>
            <div className={`cell-wall ${classes.question2}`}>
              <div className="cell-membrane">
                <QuestionCard
                  des={backend.answerLists[aid].des}
                  content={backend.answerLists[aid].content}
                  agree={backend.answerLists[aid].agree}
                  comment={backend.answerLists[aid].comment}
                  show={this.state.show}
                />
              </div>
            </div>
            <QuestionFooter />
          </div>
          
        )}
      </div>
    ) : (
      <div>
        loading
      </div>
    );
  }
}

Question.i18n = [
  {},
  {}
];

Question.propTypes = {
  // self

  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
