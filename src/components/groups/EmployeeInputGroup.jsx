const React = require('react');

const TextInput = require('../inputs/TextInput.jsx');
const DateInput = require('../inputs/DateInput.jsx');
const RadioInputGroup = require('./RadioInputGroup.jsx');
const RadioInput = require('../inputs/RadioInput.jsx');
const NumberInput = require('../inputs/NumberInput.jsx');
const CurrencyInput = require('../inputs/CurrencyInput.jsx');
const DropdownInput = require('../inputs/DropdownInput.jsx');


let EmployeeInputGroup = React.createClass({
  render: () => {
    return (
      <div>
        <div className="usa-grid">
          <TextInput
            className="usa-width-two-thirds"
            id=""
            name=""
            label="Name"
          />
          <DateInput
            className="usa-width-one-third"
            id=""
            name=""
            label="Date hired"
          />
        </div>
        <RadioInputGroup label="Was the worker 24 . . . ?">
          <RadioInput
            id=""
            name=""
            label="Yes"
          />
          <RadioInput
            id=""
            name=""
            label="No"
          />
        </RadioInputGroup>
        <RadioInputGroup label="Was the worker provided accommodations?">
          <RadioInput
            id=""
            name=""
            label="Yes"
            />
          <RadioInput
            id=""
            name=""
            label="No"
            />
        </RadioInputGroup>
        <NumberInput
          id=""
          name=""
          label="How many jobs?"
        />
        <div className="usa-grid">
          <NumberInput
            className="usa-width-one-half"
            id=""
            name=""
            label="Average hours worked"
          />
          <CurrencyInput
            className="usa-width-one-half"
            id=""
            name=""
            label="Average earnings"
          />
        </div>
        <TextInput
          id=""
          name=""
          label="Type of work"
        />
        <DropdownInput
          id=""
          name=""
          label="Primary disability"
        >
          <option value="">Select one</option>
        </DropdownInput>
        <CurrencyInput
          id=""
          name=""
          label="Prevailing wage rate"
        />
        <TextInput
          id=""
          name=""
          label="Productivity measurements . . ."
        />
        <CurrencyInput
          id=""
          name=""
          label="Commensurate . . ."
        />
        <NumberInput
          id=""
          name=""
          label="Total hours"
        />
      </div>
    );
  }
});


module.exports = EmployeeInputGroup;
