/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Notification from 'containers/Notification';
import { Footer } from 'components/MenuPage';
import GlobalStyle from '../../global-styles';
import Loader from '../Loader';
import HomePage from '../HomePage';
import Profile from '../Profile';
// import './styles.scss';

export default function App() {
  return (
    <div>
      {/* <GlobalStyle /> */}

      <Helmet titleTemplate="optyx Dashboard" defaultTitle="optyx Dashboard">
        <meta name="description" content="optyx Dashboard application" />
      </Helmet>

      <Notification />
      <Switch>
        {/* <Route path="/login" component={LoginPage} /> */}
        <Route path="/" component={wrapperRoutes} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

const wrapperRoutes = () => (
  <div>
    {/* <HomePage /> */}

    <Loader />
    <Footer />
    {/* <Header />
    <TopBar /> */}
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/profile" component={Profile} />
    </div>
  </div>
);
