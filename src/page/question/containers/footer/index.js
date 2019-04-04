import React from 'react';
import classes from './index.module.css';

import arrowUp from '../../public/arrow-drop-up.svg';
import heart from '../../public/favorite.svg';
import message from '../../public/messenger.svg';

const QuestionFooter = () => (
  <div
    className={classes.footerWrapper}
  >
    <div className={classes.wrapper2}>
      <div className={classes.useful}>
        <img className={classes['useful-icon']} src={arrowUp} alt="123" />
        <span className={classes['useful-span']}>有用  2.9k</span>
      </div>
      <div className={classes.leftThing}>
        <div className={classes.like}>
          <img className={classes['like-icon']} src={heart} alt="123" />
          <span className={classes['like-span']}>收藏</span>
        </div>
        <div className={classes.like}>
          <img className={classes['like-icon']} src={message} alt="123" />
          <span className={classes['like-span']}>评论</span>
        </div>
      </div>
    </div>
    
  </div>
);

export default QuestionFooter;
