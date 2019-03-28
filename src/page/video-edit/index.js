import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {isLogin} from '../../tool/api-helper';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {setToken} from '../../tool/set-token';

export class VideoEdit extends React.Component {
  constructor(props) {
    super(props);
    // i18n
    this.text = VideoEdit.i18n[languageHelper()];
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
    // render
    return (
      <div>
        <div
          className="cell-wall"
        >
          <div
            className="cell-membrane"
          >
            <span>video-edit</span>
          </div>
        </div>
      </div>
    );
  }
}

VideoEdit.i18n = [
  {},
  {}
];

VideoEdit.propTypes = {
  // self

  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
