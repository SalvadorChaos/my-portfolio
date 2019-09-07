import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import Portfolio from './components/PortfolioPage';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';

const App = () => (
  <HashRouter>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
  </HashRouter>
);

export default App;
