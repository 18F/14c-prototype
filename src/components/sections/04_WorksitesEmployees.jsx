const React = require('react');

const Section = require('../templates/Section.jsx');
const WorksiteInputGroup = require('../groups/WorksiteInputGroup.jsx');
const EmployeeInputGroup = require('../groups/EmployeeInputGroup.jsx');
const NumberInput = require('../inputs/NumberInput.jsx');


let WorksitesEmployees = React.createClass({
  render: () => {
    return (
      <Section>
        <h3>Total number of worksites?</h3>
        <NumberInput
          id=""
          name=""
          />
        <WorksiteInputGroup></WorksiteInputGroup>
        <EmployeeInputGroup></EmployeeInputGroup>
        <div>
          <button className="usa-button-outline" type="button">Add another employee</button> or <button className="usa-button-outline" type="button">Add another worksite</button>
        </div>
      </Section>
    );
  }
});


module.exports = WorksitesEmployees;
