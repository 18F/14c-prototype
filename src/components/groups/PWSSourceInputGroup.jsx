const React = require('react');

const AddressInputGroup = require('./AddressInputGroup.jsx');
const TextInput = require('../inputs/TextInput.jsx');
const DateInput = require('../inputs/DateInput.jsx');
const TextareaInput = require('../inputs/TextareaInput.jsx');
const CurrencyInput = require('../inputs/CurrencyInput.jsx');


let PWSSourceInputGroup = React.createClass({
  render: () => {
    return (
      <div>
        <fieldset>
          <legend>Contact information</legend>
          <TextInput
            id=""
            name=""
            label="Name of company"
          />
          <AddressInputGroup
            id=""
            name=""
            label="Address"
          />
          <TextInput
            id=""
            name=""
            label="Phone"
            pattern="(\d{3}) \d{3}-\d{4}"
          />
        </fieldset>
        <fieldset>
          <legend>Individual contacted</legend>
          <TextInput
            id=""
            name=""
            label="Name"
          />
          <TextInput
            id=""
            name=""
            label="Title"
          />
        </fieldset>
        <DateInput
          id=""
          name=""
          label="Date contacted"
        />
        <TextareaInput
          id=""
          name=""
          label="Brief description"
        />
        <TextareaInput
          id=""
          name=""
          label="Basis for conducting . . ."
        />
        <CurrencyInput
          label="Wage provided"
        />
      </div>
    );
  }
});


module.exports = PWSSourceInputGroup;
