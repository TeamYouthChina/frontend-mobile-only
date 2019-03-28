import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import {languageHelper} from '../../tool/language-helper';

class ArticleCardReact extends React.Component {
  constructor(props) {
    super(props);
    // i18n
    this.text = ArticleCardReact.i18n[languageHelper()];
  }

  render() {
    // Use `this.props.history.push('/unauthorized');` to jump to unauthorized page
    // when fetch response is 401.
    return (
      <div>

      </div>
    );
  }
}

ArticleCardReact.i18n = [
  {},
  {}
];

ArticleCardReact.propTypes = {
  // self

  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export const ArticleCard = withRouter(ArticleCardReact);
