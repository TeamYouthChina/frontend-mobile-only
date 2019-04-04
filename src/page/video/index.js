import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {isLogin} from '../../tool/api-helper';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {setToken} from '../../tool/set-token';
import Player from 'griffith';
import Title from './title';
import classes from './index.module.css';

const sources = {
  hd: {
    play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
  },
  sd: {
    play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4',
  },
};

export class Video extends React.Component {
  constructor(props) {
    super(props);
    // i18n
    this.text = Video.i18n[languageHelper()];
    this.state={
      videoLists:[1,2,3,4],
      showIndex:0
    };
  }
  
  handleClick = (index) => {
    this.setState(()=>({
      showIndex:index
    }));
  };

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
      <div className={classes.backFirst}>
        <br />
        <p className={classes.title}>
          <span className={classes.titleSpan}>X</span>
          <span className={classes.fileDes}>知乎视频</span>
        </p>
        {this.state.videoLists.map((item, index)=>(
          <div onClick={()=>this.handleClick(index)} key={item} className={this.state.showIndex === index ? classes.active : classes.noActive}>
            <Player id={'1'} cover={''} duration={'1'} sources={sources} />
            <Title />
          </div>
        ))}
      </div>
    );
  }
}

Video.i18n = [
  {},
  {}
];

Video.propTypes = {
  // self

  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
