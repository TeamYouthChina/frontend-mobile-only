import React from 'react';
// import PropTypes from 'prop-types';
import classes from './index.module.css';
import Comment from '../public/comment.svg';
import Share from '../public/share.svg';
import ThumbUp from '../public/thumb-up.svg';

const Title = () => (
  <ul>
    <li className={classes.firstLine}>
      如何看待华为在3月26日晚发布的华为p30系列,如何看待华为在3月26日晚发布的华为p30系列如何看待华为在3月26日晚发布的华为p30系列如何看待华为在3月26日晚发布的华为p30系列如何看待华为在3月26日晚发布的华为p30系列如何看待华为在3月26日晚发布的华为p30系列
    </li>
    <li className={classes.secondLine}>
      <div className={classes.thing}>
        <img className={classes.titleImg} src="https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg" alt="error" />
        <span className={classes.des}>
          个人描述
        </span>
        <span className={classes.tagSpan}>
          关注
        </span>
      </div>
      <div className={classes.thing}>
        <div className={classes.footerFont}>
          <img className={classes.footerIcon} src={ThumbUp} alt="" />
          <span className={classes.content}>198k点赞</span>
        </div>
        <div className={classes.footerFont}>
          <img className={classes.footerIcon} src={Comment} alt="" />
          <span className={classes.content}>2.3k</span>
        </div>
        <div className={classes.footerFontEnd}>
          <img className={classes.footerIcon} src={Share} alt="" />
          <span className={classes.content}>分享</span>
        </div>
      </div>
    </li>
  </ul>
);

export default Title;
