import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {isLogin} from '../../tool/api-helper';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {setToken} from '../../tool/set-token';

import {MDBView, MDBMask, MDBIcon} from 'mdbreact';
import shape from './public/Shape.svg';
import classes from './index.module.css';

export class ReviewEdit extends React.Component {
  constructor(props) {
    super(props);
    // i18n
    this.text = ReviewEdit.i18n[languageHelper()];
    this.state = {
      allTags: ['公司福利', '面试技巧', '合理陶瓷'],
      urlList: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deletePic = this.deletePic.bind(this);
    this.getObjectURL = this.getObjectURL.bind(this);
  }

  deleteIcon(index) {
    let array = this.state.allTags;
    this.setState({
      allTags: array.slice(0, index).concat(array.slice(index + 1, array.length))
    });
  }

  newTag(e) {
    const value = e.target.value;
    let array = this.state.allTags;
    if (e.keyCode === 13) {
      if (array.indexOf(value) === 1) {
        alert('sorry for repeat');
        e.target.value = null;
        return;
      } else if (value === null) {
        alert('sorry for null');
      }
      array.push(value);
      e.target.value = null;
      this.setState({
        allTags: array
      });
    }
  }

  handleInputChange(e) {
    // 利用自带方法制造url
    let imgSrcI = this.getObjectURL(e.target.files[0]);
    let urlLists = this.state.urlList;
    this.setState(() => ({
      urlLists: urlLists.push(imgSrcI)
    }));
  }

  // 删除图片
  deletePic(index) {
    let urlLists = this.state.urlList;
    this.setState(()=>({
      urlList:urlLists.slice(0, index).concat(urlLists.slice(index+1, urlLists.length))
    }));
  }

  // 转化上传文件到url
  getObjectURL(file) {
    let url = null;
    if (window.createObjectURL !== undefined) { // basic
      url = window.createObjectURL(file);
    } else if (window.URL !== undefined) { // mozilla(firefox)
      url = window.URL.createObjectURL(file);
    } else if (window.webkitURL !== undefined) { // webkit or chrome
      url = window.webkitURL.createObjectURL(file);
    }
    return url;
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
      <div style={{backgroundColor: '#F0F3FA', height: '100%'}}>
        <div
          className={`cell-wall ${classes.wrapper}`}
        >
          <div className={classes.title}>
            <span className={classes.cancel}>取消</span>
            <span className={classes.titleAsk}>发短评</span>
            <span className={classes.addTitle}>发布</span>
          </div>
        </div>
        <div className="cell-wall">
          <ul className={classes.content}>
            <li className={classes.titleDes}>相关公司</li>
            <li>
              <input className={classes.inputStyle} type="text" placeholder="简述你的标题" />
            </li>
            <li className={classes.titleDes}>短评描述</li>
            <li>
              <textarea className={classes.textStyle} type="text" placeholder="详细说说你的工作感受" />
            </li>
            {/*添加图片逻辑*/}
            <div className={classes.imgWrapper}>
              {this.state.urlList.map((url, index) => (
                <MDBView hover key={url}>
                  <div className={classes.deleteWrapper}>
                    <img
                      className={`img-fluid ${classes.viewImg}`}
                      src={url}
                      alt="error"
                    />
                    <MDBMask pattern={6} className={classes.maskRe}>
                      <MDBIcon onClick={()=>this.deletePic(index)} className={classes.btmAb} icon="trash" />
                    </MDBMask>
                  </div>
                </MDBView>
              ))}
              {/*添加图片内容*/}
              <div className={classes.picContainer}>
                <img
                  style={{display: 'none'}}
                  ref={(imgInput) => this.imgUrl = imgInput}
                  src={null}
                  className={`img-fluid ${classes.viewImg}`}
                  alt='123'
                />
                <img src={shape} alt="error" className={classes.picIcon} />
                <input
                  className={classes.picInput}
                  ref={(fileInput) => this.input = fileInput}
                  type="file"
                  accept="image/*"
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>
            </div>
            <li className={classes.titleDes}>工作标签</li>
            <div className={classes.tags}>
              {this.state.allTags.map((item, index) => (
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

ReviewEdit.i18n = [
  {},
  {}
];

ReviewEdit.propTypes = {
  // self

  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
