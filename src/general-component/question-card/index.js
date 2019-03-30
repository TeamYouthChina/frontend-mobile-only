import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import {languageHelper} from '../../tool/language-helper';

import QuestionTitle from './containers/questionTitle';
import QuestionContent from './containers/questionContent';
import Footer from './containers/footer';

import data from './data';

class QuestionCardReact extends React.Component {
  constructor(props) {
    super(props);
    // i18n
    this.text = QuestionCardReact.i18n[languageHelper()];
    this.state = {
      backend: null
    };
  }

  componentDidMount() {
    this.setState({
      backend: data.content
    });
  }

  render() {
    // Use `this.props.history.push('/unauthorized');` to jump to unauthorized page
    // when fetch response is 401.
    return (this.state.backend !== null) ? (
      <div
        className="cell-wall"
        style={{backgroundColor: '#FFFFFF'}}
      >
        <div
          className="cell-membrane"
        >
          <QuestionTitle title={this.state.backend.title} />
          <QuestionContent content={this.state.backend.content} />
          <Footer
            agree={this.state.backend.agree.toLocaleString()}
            comment={this.state.backend.comment.toLocaleString()}
          />
        </div>
      </div>
    ) : (
      <div>
        loading
      </div>
    );
  }
}

QuestionCardReact.i18n = [
  {},
  {}
];

QuestionCardReact.propTypes = {
  // self

  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export const QuestionCard = withRouter(QuestionCardReact);
