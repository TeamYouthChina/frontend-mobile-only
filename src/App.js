import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import {AnswerEdit} from './page/answer-edit';
import {Article} from './page/article';
import {ArticleEdit} from './page/article-edit';
import {DiscoveryInsight} from './page/discovert-insight';
import {DiscoveryVideo} from './page/discovery-video';
import {NoFound} from './page/no-found';
import {Question} from './page/question';
import {QuestionEdit} from './page/question-edit';
import {Review} from './page/review';
import {ReviewEdit} from './page/review-edit';
import {Video} from './page/video';
import {VideoEdit} from './page/video-edit';
import {Unauthorized} from './page/unauthorized';
import {languageHelper} from './tool/language-helper';
import {setToken} from './tool/set-token';

// for develop and debug
setToken('?token=0123456789ABCDEF');

export class App extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
    // i18n
    this.text = App.i18n[languageHelper()];
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Redirect to="/page-no-found" />}
          />
          <Route
            path="/article/:id/edit"
            component={routeProps => <ArticleEdit {...routeProps} create={false} />}
          />
          <Route
            path="/article/create"
            component={routeProps => <ArticleEdit {...routeProps} create={true} />}
          />
          <Route
            path="/article/:id"
            component={routeProps => <Article {...routeProps} />}
          />
          <Route
            path="/discovery-insight"
            component={routeProps => <DiscoveryInsight {...routeProps} />}
          />
          <Route
            path="/discovery-video"
            component={routeProps => <DiscoveryVideo {...routeProps} />}
          />
          <Route
            path="/question/:qid/answer/:aid/edit"
            component={routeProps => <AnswerEdit {...routeProps} create={false} />}
          />
          <Route
            path="/question/:qid/answer/create"
            component={routeProps => <AnswerEdit {...routeProps} create={true} />}
          />
          <Route
            path="/question/:qid/answer/:aid"
            component={routeProps => <Question {...routeProps} />}
          />
          <Route
            path="/question/:qid/edit"
            component={routeProps => <QuestionEdit {...routeProps} create={false} />}
          />
          <Route
            path="/question/create"
            component={routeProps => <QuestionEdit {...routeProps} create={true} />}
          />
          <Route
            path="/question/:qid"
            component={routeProps => <Question {...routeProps} />}
          />
          <Route
            path="/review/:id/edit"
            component={routeProps => <ReviewEdit {...routeProps} create={false} />}
          />
          <Route
            path="/review/create"
            component={routeProps => <ReviewEdit {...routeProps} create={true} />}
          />
          <Route
            path="/review/:id"
            component={routeProps => <Review {...routeProps} />}
          />
          <Route
            path="/unauthorized"
            component={routeProps => <Unauthorized {...routeProps} />}
          />
          <Route
            path="/video/:id/edit"
            component={routeProps => <VideoEdit {...routeProps} create={false} />}
          />
          <Route
            path="/video/create"
            component={routeProps => <VideoEdit {...routeProps} create={true} />}
          />
          <Route
            path="/video/:id"
            component={routeProps => <Video {...routeProps} />}
          />
          <Route
            path="/page-no-found"
            component={routeProps => <NoFound {...routeProps} />}
          />
          <Redirect to="/page-no-found" />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.i18n = [
  {},
  {}
];

App.propTypes = {};
