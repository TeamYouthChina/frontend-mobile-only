import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.module.css';
import thumbUp from '../../public/thumb-up.svg';

const Content = (props) => (
  <div className={classes.wrapper}>
    <img
      src={'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg'}
      alt="123"
      className={`rounded-circle ${classes.avatar}`}
    />
    <ul className={classes.ulStyle}>
      <li className={classes.liStyle}>
        <span className={classes.username}>{props.username}</span>
        <div className={classes.iconStyle}>
          <img className={classes.thumb} src={thumbUp} alt="123" />
          <span className={classes.like}>{props.like}</span>
        </div>
      </li>
      <li className={classes.contentLi}>
        {props.content}
      </li>
    </ul>
  </div>
);

Content.propTypes = {
  // self
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  like: PropTypes.string.isRequired,
};

export default Content;
