import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.module.css';

const Title = (props) => (
  <div className={classes.titleWrapper}>
    <img
      src={'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg'}
      alt="123"
      className={`rounded-circle ${classes.avatar}`}
    />
    <span className={classes.username}>{props.username}</span>
    <div className={classes.focus}>+ 关注</div>
  </div>
);

Title.propTypes = {
  // self
  username:PropTypes.string.isRequired,
};

export default Title;
