import React from 'react';
import PropTypes from 'prop-types';

import QuestionContent from './questionContent';
import Footer from './footer';
import classes from './index.module.css';

const QuestionCard = (props) => (
  <div>
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <img
          src={'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg'}
          alt="123"
          className={`rounded-circle ${classes.avatar}`}
        />
        <span className={classes.des}>
          {props.des}
        </span>
      </div>
      {!props.show && (
        <div className={classes.focus}>
          + 关注
        </div>
      )}
    </div>
    <QuestionContent
      content={props.content}
    />
    <Footer
      agree={props.agree.toLocaleString()}
      comment={props.comment.toLocaleString()}
    />
  </div>
);

QuestionCard.propTypes = {
  // self
  des: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  agree: PropTypes.number.isRequired,
  comment: PropTypes.number.isRequired,
};

export default QuestionCard;
