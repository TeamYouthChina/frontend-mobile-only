import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import {languageHelper} from '../../tool/language-helper';

class ReviewCardReact extends React.Component {
  constructor(props) {
    super(props);
    // i18n
    this.text = ReviewCardReact.i18n[languageHelper()];
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

ReviewCardReact.i18n = [
  {},
  {}
];

ReviewCardReact.propTypes = {
  // self

  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export const ReviewCard = withRouter(ReviewCardReact);
