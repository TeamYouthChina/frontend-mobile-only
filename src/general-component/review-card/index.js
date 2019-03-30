import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import {languageHelper} from '../../tool/language-helper';

import Title from './containers/title';
import Content from './containers/content';
import Footer from './containers/footer';
import data from './data';

class ReviewCardReact extends React.Component {
  constructor(props) {
    super(props);
    // i18n
    this.text = ReviewCardReact.i18n[languageHelper()];
    this.state={
      backend:'123'
    };
  }
  
  componentDidMount() {
    this.setState({
      backend:data.content
    });
  }

  render() {
    // Use `this.props.history.push('/unauthorized');` to jump to unauthorized page
    // when fetch response is 401.
    const backend = this.state.backend;
    return (this.state.backend !== null) ? (
      <div
        className="cell-wall"
        style={{backgroundColor: '#FFFFFF'}}
      >
        <div
          className="cell-membrane"
        >
          <Title 
            count={backend.count} 
            userDetail={backend.userDetail} 
            username={backend.username}
          />
          <Content 
            content={backend.content}
          />
          <Footer 
            comment={backend.comment} 
            agree={backend.agree}
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
