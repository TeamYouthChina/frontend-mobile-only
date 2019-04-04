import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.module.css';

const Footer = (props) => (
  <React.Fragment>
    <span className={classes.agree}>{props.agree} 赞同</span>
    <span className={classes.comment}>{props.comment} 评论</span>
  </React.Fragment>
);

Footer.propTypes = {
  // self
  agree:PropTypes.string.isRequired,
  comment:PropTypes.string.isRequired,
};

export default Footer;
