import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.module.css';

const Footer = (props) => (
  <div>
    {props.tags.map((item)=>(
      <button key={item} className={classes.footerBtn}>
        {item}
      </button>
    ))}
  </div>
);

Footer.propTypes = {
  // self
  tags:PropTypes.array.isRequired,
};

export default Footer;
