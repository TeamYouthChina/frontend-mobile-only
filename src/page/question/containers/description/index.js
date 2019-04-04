import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.module.css';
import { Link } from 'react-router-dom';
import arrow from '../../public/chevron-left.svg';

const QuestionDes = (props) => (
  <div>
    <div className={classes.topWrapper}>
      <img
        src={'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg'}
        alt="123"
        className={`rounded-circle ${classes.avatar}`}
      />
      <span className={classes.des}>
        {props.des}
      </span>
    </div>
    <p className={classes.title}>
      {props.title}
    </p>
    {!props.show && (
      <Link className={classes.linkOut} to={'/'}>
        查看全部的{props.count}个回答
        <img src={arrow} alt="123" />
      </Link>
    )}
    <div className={classes.topWrapper2}>
      <div className={classes.questionDes}>
        {props.detail}
      </div>
      {props.show && (
        <div className={classes.focus}>
          + 关注问题
        </div>
      )}
    </div>
  </div>
);

QuestionDes.propTypes = {
  // self
  show:PropTypes.bool.isRequired,
  des:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  count:PropTypes.number.isRequired,
  detail:PropTypes.string.isRequired,
};

export default QuestionDes;
