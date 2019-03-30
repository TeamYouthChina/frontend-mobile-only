import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {isLogin} from '../../tool/api-helper';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {setToken} from '../../tool/set-token';

import {QuestionCard} from '../../general-component/question-card';
import {ReviewCard} from '../../general-component/review-card';

export class DiscoveryInsight extends React.Component {
  constructor(props) {
    super(props);
    // i18n
    this.text = DiscoveryInsight.i18n[languageHelper()];
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
      <div style={{backgroundColor: '#F0F3FA'}}>
        <span>discovery-insight</span>
        <QuestionCard />
        <p style={{lineHeight:'10px'}}></p>
        <ReviewCard />
      </div>
    );
  }
}

DiscoveryInsight.i18n = [
  {},
  {}
];

DiscoveryInsight.propTypes = {
  // self

  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
