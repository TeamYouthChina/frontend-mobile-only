import React from 'react';
import PropTypes from 'prop-types';
import {MDBIcon} from 'mdbreact';
import classes from './index.module.css';

const Title = (props) => (
  <div className={classes.titleWrapper}>
    <img
      src={'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg'}
      alt="123"
      className={`rounded-circle ${classes.avatar}`}
    />
    <ul className={classes.titleUl}>
      <li className={classes.name}>{props.username}</li>
      <li className={classes.detail}>
        <span className={classes.userDetail}>{props.userDetail}</span>
        <button className={classes.count}>{props.count}分</button>
      </li>
    </ul>
    <span className={classes.ellipsis}>
      <MDBIcon icon="ellipsis-h" />
    </span>
  </div>
);

Title.propTypes = {
  // self
  username:PropTypes.string.isRequired,
  userDetail:PropTypes.string.isRequired,
  count:PropTypes.number.isRequired,
};

export default Title;
