import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, withRouter} from 'react-router-dom';

import {isLogin} from '../../../../tool/api-helper';
import {languageHelper} from '../../../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../../../tool/remove-url-slash-suffix';
import {setToken} from '../../../../tool/set-token';
import classes from './index.module.css';

import Content from './containers/content';
import AddComment from './containers/addComment';
import data from './data';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    // i18n
    this.text = Comments.i18n[languageHelper()];
    this.state={
      backend:null
    };
  }

  componentDidMount() {
    this.setState({
      backend:data.content
    });
  }

  render() {
    // get token from query string in URL
    setToken(this.props.location.search);
    // make sure user has logged in
    if (!isLogin()) {
      this.props.history.push('/unauthorized');
    }
    // remove redundant slash (/)
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname} />);
    }
    const backend = this.state.backend;
    // render
    return (this.state.backend !== null) ? (
      <div>
        <div
          className="cell-wall"
        >
          <div
            className="cell-membrane"
          >
            <p className={classes.comment}>评论</p>
            {backend.comments.map((item)=>(
              <Content 
                key={item.id}
                content={item.content}
                username={item.username}
                like={item.like.toLocaleString()}
              />
            ))}
            <p className={classes.count}>查看全部{backend.comments.length}条评论</p>
            <AddComment />
          </div>
        </div>
      </div>
    ) : (
      <div>
        loading
      </div>
    );
  }
}

Comments.i18n = [
  {},
  {}
];

Comments.propTypes = {
  // self

  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(Comments);
