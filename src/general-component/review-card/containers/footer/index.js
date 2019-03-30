import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.module.css';
import thumbUp from '../../public/thumb-up.svg';

const Footer = (props) => (
  <div>
    <span className={classes.comment}>{props.comment} 评论</span>
    <span className={classes.agree}>{props.agree} 喜欢</span>
    <div className={classes.iconStyle}>
      <img className={classes.thumb} src={thumbUp} alt="123" />
      <span className={classes.like}>喜欢</span>
    </div>
  </div>
);

Footer.propTypes = {
  // self
  agree:PropTypes.string.isRequired,
  comment:PropTypes.string.isRequired,
};

export default Footer;
