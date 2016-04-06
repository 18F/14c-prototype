const React = require('react');

const CurrencyInput = require('../inputs/CurrencyInput.jsx');
const DateInput = require('../inputs/DateInput.jsx');
const DropdownInput = require('../inputs/DropdownInput.jsx');
const NumberInput = require('../inputs/NumberInput.jsx');
const Question = require('../questions/Question.jsx');
const QuestionInput = require('../questions/QuestionInput.jsx');
const RadioInput = require('../inputs/RadioInput.jsx');
const RadioInputGroup = require('./RadioInputGroup.jsx');
const TextInput = require('../inputs/TextInput.jsx');


let EmployeeInputGroup = React.createClass({
  render: () => {
    return (
      <div>
        <h2>Employee</h2>

        <div className="usa-grid-full">
          <div className="usa-width-two-thirds">
            <div className="usa-grid">
              <div className="usa-width-two-thirds">
                <h3>Name</h3>
                <TextInput className="usa-width-two-thirds" id="employeeName" name="employeeName" placeholder="First and last name" />
              </div>

              <div className="usa-width-one-third">
                <h3>Date hired</h3>
                <TextInput className="usa-width-one-third" id="employeeDateHired" name="employeeDateHired" />
              </div>
            </div>
          </div>
        </div>

        <Question>
          <QuestionInput heading="Was the worker 24 . . . ?">
            <RadioInputGroup>
              <RadioInput id="employee24:yes" name="employee24" value="yes" label="Yes" />
              <RadioInput id="employee24:no" name="employee24" value="no" label="No" />
            </RadioInputGroup>
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Was the worker provided accommodations?">
            <RadioInputGroup>
              <RadioInput id="employeeProvidedAccommodations:yes" name="employeeProvidedAccommodations" value="yes" label="Yes" />
              <RadioInput id="employeeProvidedAccommodations:no" name="employeeProvidedAccommodations" value="no" label="No" />
            </RadioInputGroup>
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="How many jobs?">
            <NumberInput id="employeeNumJobs" name="employeeNumJobs" />
          </QuestionInput>
        </Question>

        <div className="usa-grid-full">
          <div className="usa-width-two-thirds">
            <div className="usa-grid">
              <div className="usa-width-one-half">
                <h3>Average hours worked</h3>
                <NumberInput className="usa-width-one-half" id="employeeAvgHoursWorked" name="employeeAvgHoursWorked" />
              </div>
              <div className="usa-width-one-half">
                <h3>Average earnings</h3>
                <CurrencyInput className="usa-width-one-half" id="employeeAvgEarnings" name="employeeAvgEarnings" />
              </div>
            </div>
          </div>
        </div>

        <Question>
          <QuestionInput heading="Type of work">
            <TextInput id="employeeTypeOfWork" name="employeeTypeOfWork" />
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Primary disability">
            <DropdownInput id="employeeDisability" name="employeeDisability">
              <option value="">Select one</option>
            </DropdownInput>
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Prevailing wage rate">
            <CurrencyInput id="employeePrevailingWageRate" name="employeePrevailingWageRate" />
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Productivity measurements . . .">
            <TextInput id="employeeProductivity" name="employeeProductivity" />
          </QuestionInput>
        </Question>

        <div className="usa-grid-full">
          <div className="usa-width-two-thirds">
            <div className="usa-grid">
              <div className="usa-width-one-half">
                <h3>Commensurate . . .</h3>
                <CurrencyInput id="employeeCommensurate" name="employeeCommensurate" />
              </div>
              <div className="usa-width-one-half">
                <h3>Total hours</h3>
                <NumberInput id="employeeTotalHours" name="employeeTotalHours" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = EmployeeInputGroup;
