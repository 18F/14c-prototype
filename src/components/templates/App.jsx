const React = require('react');

const Link = require('react-router').Link;


const App = (props) => {
  return (
    <div className="usa-grid">
      <header><Link to="/">DOL/WHD <i>14C online application prototype</i></Link></header>
      <div>
        {props.children}
      </div>
    </div>
  );
};


module.exports = App;
