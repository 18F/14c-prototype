const React = require('react');
const NavLink = require('../NavLink.jsx');


let Section = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/1">Employer</NavLink></li>
          <li><NavLink to="/2">Wage Data</NavLink></li>
          <li><NavLink to="/4">Worksites/Employees</NavLink></li>
          <li><NavLink to="/5">Final Assurances</NavLink></li>
        </ul>
      </nav>
      <div className="usa-grid" id="section-content">
        {props.children}
      </div>
      <hr />
      <div>
        <button type="button">Back</button>
        <button type="button">Save and continue working on later</button>
        <button type="button">Next</button>
      </div>
    </div>
  );
};


module.exports = Section;
