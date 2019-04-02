import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.module.css';

const AddComment = () => (
  <div className={classes.wrapper}>
    <img
      src={'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg'}
      alt="123"
      className={`rounded-circle ${classes.avatar}`}
    />
    <input className={classes.addComment} type="text" placeholder='添加评论...'/>
  </div>
);

AddComment.propTypes = {
  // self
  username: PropTypes.string.isRequired,
};

export default AddComment;
