const React = require('react');

const NavLink = require('../NavLink.jsx');


const Section = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/1">Employer</NavLink></li>
          <li><NavLink to="/2">Wage Data</NavLink></li>
          <li><NavLink to="/3">Wage Details</NavLink></li>
          <li><NavLink to="/4">Worksites/Employees</NavLink></li>
          <li><NavLink to="/5">Final Assurances</NavLink></li>
        </ul>
      </nav>
      <div>
        {props.children}
      </div>
    </div>
  );
};


module.exports = Section;
