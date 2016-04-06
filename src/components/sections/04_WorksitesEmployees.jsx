const React = require('react');

const Link = require('react-router').Link;

const EmployeeInputGroup = require('../groups/EmployeeInputGroup.jsx');
const NumberInput = require('../inputs/NumberInput.jsx');
const Question = require('../questions/Question.jsx');
const QuestionInput = require('../questions/QuestionInput.jsx');
const Section = require('../templates/Section.jsx');
const WorksiteInputGroup = require('../groups/WorksiteInputGroup.jsx');


const WorksitesEmployees = () => {
  return (
    <Section>
      <Question>
        <QuestionInput heading="Total number of worksites?">
          <NumberInput id="numWorksites" name="numWorksites" />
          {/* this.state.showNumWorksitesAlert ?
            <div class="usa-alert usa-alert-warning">
              <div class="usa-alert-body">
                <h3 class="usa-alert-heading">Worksite Information</h3>
                <p class="usa-alert-text">You must provide worksite and employee information for each worksite/establishment.</p>
              </div>
            </div>
          : null */}
        </QuestionInput>
      </Question>
      {/*
        <WorksiteInputGroup></WorksiteInputGroup>
        <EmployeeInputGroup></EmployeeInputGroup>
      */}
      <div className="usa-grid">
        <div className="usa-width-two-thirds flex">
          <button className="usa-button-outline" type="button">Add another employee</button>
          <button className="usa-button-outline" type="button">Add another worksite</button>
        </div>
      </div>
      <hr />
      <div>
        <Link to="/3"><button type="button">Back</button></Link>
        <button type="button">Save and continue working on later</button>
        <Link to="/5"><button type="button">Next</button></Link>
      </div>
    </Section>
  );
};


module.exports = WorksitesEmployees;
