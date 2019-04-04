import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.module.css';

const Content = (props) => (
  <React.Fragment>
    <p className={classes.title}>{props.title}</p>
    <p className={classes.content}>{props.content}</p>
  </React.Fragment>
);

Content.propTypes = {
  // self
  title:PropTypes.string.isRequired,
  content:PropTypes.string.isRequired,
};

export default Content;
