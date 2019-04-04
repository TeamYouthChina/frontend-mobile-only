import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.module.css';

const QuestionTitle = (props) => (
  <React.Fragment>
    <p className={classes.title}>{props.title}</p>
  </React.Fragment>
);

QuestionTitle.propTypes = {
  // self
  title:PropTypes.string.isRequired,
};

export default QuestionTitle;
