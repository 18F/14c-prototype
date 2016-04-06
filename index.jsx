const React = require('react');

const hashHistory = require('react-router').hashHistory;
const IndexRoute = require('react-router').IndexRoute;
const ReactDOM = require('react-dom');
const Route = require('react-router').Route;
const Router = require('react-router').Router;

const App = require('./src/components/templates/App.jsx');
const Home = require('./src/components/sections/00_Home.jsx');
const Employer = require('./src/components/sections/01_Employer.jsx');
const WageData = require('./src/components/sections/02_WageData.jsx');
const WageDataDetails = require('./src/components/sections/03_WageDataDetails.jsx');
const WorksitesEmployees = require('./src/components/sections/04_WorksitesEmployees.jsx');
const FinalAssurances = require('./src/components/sections/05_FinalAssurances.jsx');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="1" component={Employer} />
      <Route path="2" component={WageData} />
      <Route path="3" component={WageDataDetails} />
      <Route path="4" component={WorksitesEmployees} />
      <Route path="5" component={FinalAssurances} />
    </Route>
  </Router>,
  document.getElementById('content')
);
