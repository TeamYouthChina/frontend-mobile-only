import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {isLogin} from '../../tool/api-helper';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {setToken} from '../../tool/set-token';

import classes from './index.module.css';

export class QuestionEdit extends React.Component {
  constructor(props) {
    super(props);
    // i18n
    this.text = QuestionEdit.i18n[languageHelper()];
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
    return (
      <div style={{backgroundColor:'#F0F3FA',height:'100%'}}>
        <div
          className={`cell-wall ${classes.wrapper}`}
        >
          <div className={classes.title}>
            <span className={classes.cancel}>取消</span>
            <span className={classes.titleAsk}>提问题</span>
            <span className={classes.addTitle}>发布</span>
          </div>
        </div>
        <div className="cell-wall">
          <ul className={classes.content}>
            <li className={classes.titleDes}>问题标题</li>
            <li>
              <input className={classes.inputStyle} type="text" placeholder="简述你的问题"/>
            </li>
            <li>
              <textarea className={classes.textStyle} type="text" placeholder="为你的问题添加更详细的描述，让职场达人更好的帮助你哦"/>
            </li>
            <div className={classes.tags}>
              <span className={classes.tagSpan}>公司福利</span>
              <span className={classes.tagSpan}>面试技巧</span>
              <span className={classes.tagSpan}>合理陶瓷</span>
              <span className={classes.addTag}>
                +新标签
              </span>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

QuestionEdit.i18n = [
  {},
  {}
];

QuestionEdit.propTypes = {
  // self

  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
