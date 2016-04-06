const React = require('react');

const AddressInputGroup = require('./AddressInputGroup.jsx');
const NumberInput = require('../inputs/NumberInput.jsx');
const Question = require('../questions/Question.jsx');
const QuestionInput = require('../questions/QuestionInput.jsx');
const RadioInput = require('../inputs/RadioInput.jsx');
const RadioInputGroup = require('./RadioInputGroup.jsx');
const TextInput = require('../inputs/TextInput.jsx');


let WorksiteInputGroup = React.createClass({
  handleChange: (event) => {
    // @todo Populate previous address value when initializing the component.
    if(event.target.id == 'worksiteType:main') {
      // @todo Automatically populate the address form.
      console.log('Address form automatically populated.');
    }
  },
  render: () => {
    return (
      <div>
        <h2>Worksite</h2>

        <Question>
          <QuestionInput heading="The establishment/worksite is:">
            <RadioInputGroup>
              <RadioInput id="worksiteType:main" name="worksiteType" value="main" label="Main establishment" />
              <RadioInput id="worksiteType:branch" name="worksiteType" value="branch" label="Branch establishment" />
              <RadioInput id="worksiteType:supported" name="worksiteType" value="supported" label="Supported employment site, including . . ." />
              <RadioInput id="worksiteType:SWEP" name="worksiteType" value="SWEP" label="School Work Experience Program Work Site" />
            </RadioInputGroup>
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Name of Est./Work Site">
            <TextInput id="worksiteName" name="worksiteName" placeholder="Name" />
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Physical Address of Worksite">
            <AddressInputGroup id="worksitePhysicalAddress" name="worksitePhysicalAddress" />
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Is SCA-covered work performed?">
            <RadioInputGroup>
              <RadioInput id="SCAWorkPerformed:yes" name="SCAWorkPerformed" value="yes" label="Yes" />
              <RadioInput id="SCAWorkPerformed:no" name="SCAWorkPerformed" value="no" label="No" />
            </RadioInputGroup>
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Is work pursuant to a federal contract for services or concessions?">
            <RadioInputGroup>
              <RadioInput id="workPursuantToContract:yes" name="workPursuantToContract" value="yes" label="Yes" />
              <RadioInput id="workPursuantToContract:no" name="workPursuantToContract" value="no" label="No" />
            </RadioInputGroup>
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Total number of employees at this establishment/worksite">
            <NumberInput id="worksiteNumEmployees" name="worksiteNumEmployees" />
          </QuestionInput>
        </Question>
      </div>
    );
  }
});


module.exports = WorksiteInputGroup;
