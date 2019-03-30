import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.module.css';

const Content = (props) => (
  <React.Fragment>
    <p className={classes.content}>{props.content}</p>
  </React.Fragment>
);

Content.propTypes = {
  // self
  content:PropTypes.string.isRequired,
};

export default Content;
