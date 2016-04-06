const React = require('react');

const Section = require('../templates/Section.jsx');
const RadioInputGroup = require('../groups/RadioInputGroup.jsx');
const RadioInput = require('../inputs/RadioInput.jsx');
const NumberInput = require('../inputs/NumberInput.jsx');
const TextInput = require('../inputs/TextInput.jsx');
const TextareaInput = require('../inputs/TextareaInput.jsx');
const PWSSourceInputGroup = require('../groups/PWSSourceInputGroup.jsx');
const CurrencyInput = require('../inputs/CurrencyInput.jsx');
const DateInput = require('../inputs/DateInput.jsx');


let WageDataDetails = React.createClass({
  render: () => {
    return (
      <Section>
        <RadioInputGroup label="How did this employer pay subminimum wage rate to workers . . . during the last fiscal year?">
          <RadioInput id="" name="" label="Hourly" />
          <RadioInput id="" name="" label="Piece" />
          <RadioInput id="" name="" label="Both" />
        </RadioInputGroup>
        <NumberInput id="" name="" label="How many workers do you pay hourly?" />
        <fieldset>
          <legend>What is the contract . . . ?</legend>
          <TextInput id="" name="" label="Name of Contract" />
          <TextareaInput id="" name="" label="Description of work" />
        </fieldset>
        <RadioInputGroup label = "Which method did you use to determine Prevailing Wage for the contract identified above?">
          <RadioInput id="" name="" label="Prevailing Wage Study" />
          <RadioInput id="" name="" label="Alternate Wage Data" />
          <RadioInput id="" name="" label="SCA wage determination" />
        </RadioInputGroup>



        <PWSSourceInputGroup></PWSSourceInputGroup>



        <h3>Alternate Wage Data</h3>
        <TextareaInput id="" name="" label="Description of work (including codes . . .)" />
        <TextInput id="" name="" label="Alternate data source" />
        <CurrencyInput id="" name="" label="Prevailing wage provided" />
        <DateInput id="" name="" label="Data data retrieved" />



        <label>Attach the applicable SCA wage determination</label>
        <button className="usa-button-outline" type="button">Attach</button>
      </Section>
    );
  }
});


module.exports = WageDataDetails;
