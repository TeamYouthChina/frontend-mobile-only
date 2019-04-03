import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {isLogin} from '../../tool/api-helper';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {setToken} from '../../tool/set-token';

import classes from './index.module.css';

export class ArticleEdit extends React.Component {
  constructor(props) {
    super(props);
    // i18n
    this.text = ArticleEdit.i18n[languageHelper()];
    this.state={
      allTags:['公司福利','面试技巧','合理陶瓷']
    };
  }

  deleteIcon(index){
    let array = this.state.allTags;
    this.setState({
      allTags:array.slice(0,index).concat(array.slice(index+1,array.length))
    });
  }

  newTag(e){
    const value = e.target.value;
    let array = this.state.allTags;
    if(e.keyCode === 13) {
      if(array.indexOf(value) === 1) {
        alert('sorry for repeat');
        e.target.value = null;
        return;
      } else if (value === null) {
        alert('sorry for null');
      }
      array.push(value);
      e.target.value = null;
      this.setState({
        allTags:array
      });
    }
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
            <span className={classes.titleAsk}>写文章</span>
            <span className={classes.addTitle}>发布</span>
          </div>
        </div>
        <div className="cell-wall">
          <ul className={classes.content}>
            <li className={classes.titleDes}>文章标题</li>
            <li>
              <input className={classes.inputStyle} type="text" placeholder="简述你的标题"/>
            </li>
            <li>
              <textarea className={classes.textStyle} type="text" placeholder="为你的文章添加更详细的描述，让职场达人更好的帮助你哦"/>
            </li>
            <div className={classes.tags}>
              {this.state.allTags.map((item,index)=>(
                <span key={index} className={classes.tagSpan}>
                  {item}
                  <i onClick={() => this.deleteIcon(index)} className={`fa fa-times close ${classes.deleteIcon}`} />
                </span>
              ))}
              <input className={classes.addTag} onKeyDown={(e) => this.newTag(e)} type="text" placeholder='+新标签' />
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

ArticleEdit.i18n = [
  {},
  {}
];

ArticleEdit.propTypes = {
  // self

  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
