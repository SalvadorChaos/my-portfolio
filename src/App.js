import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import Portfolio from './components/PortfolioPage';
//import PortfolioItem from './components/PortfolioItemPage';
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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
