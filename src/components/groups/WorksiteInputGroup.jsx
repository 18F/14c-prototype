const React = require('react');

const RadioInputGroup = require('./RadioInputGroup.jsx');
const RadioInput = require('../inputs/RadioInput.jsx');
const TextInput = require('../inputs/TextInput.jsx');
const AddressInputGroup = require('./AddressInputGroup.jsx');
const NumberInput = require('../inputs/NumberInput.jsx');


let WorksiteInputGroup = React.createClass({
  render: () => {
    return (
      <div>
        <RadioInputGroup label="The establishment/worksite is:">
          <RadioInput
            id=""
            name=""
            label="Main establishment"
          />
          <RadioInput
            id=""
            name=""
            label="Branch establishment"
          />
          <RadioInput
            id=""
            name=""
            label="Supported employment site, including . . ."
          />
          <RadioInput
            id=""
            name=""
            label="School Work Experience Program Work Site"
          />
        </RadioInputGroup>
        <TextInput
          id=""
          name=""
          label="Name of Est./Work Site"
        />
        <AddressInputGroup
          label="Physical Address of Worksite"
        />
        <RadioInputGroup label="Is SCA-covered work performed?">
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
        <RadioInputGroup label="Is work pursuant to a federal contract for services or concessions?">
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
          label="Total number of employees at this establishment/worksite"
        />
      </div>
    );
  }
});


module.exports = WorksiteInputGroup;
