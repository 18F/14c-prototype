const React = require('react');

const Section = require('../templates/Section.jsx');
const RadioInputGroup = require('../groups/RadioInputGroup.jsx');
const RadioInput = require('../inputs/RadioInput.jsx');
const TextInput = require('../inputs/TextInput.jsx');
const CheckboxInputGroup = require('../groups/CheckboxInputGroup.jsx');
const CheckboxInput = require('../inputs/CheckboxInput.jsx');
const EmailInput = require('../inputs/EmailInput.jsx');
const AddressInputGroup = require('../groups/AddressInputGroup.jsx');
const DateInput = require('../inputs/DateInput.jsx');
const NumberInput = require('../inputs/NumberInput.jsx');


let Employer = React.createClass({
  render: () => {
    return (
      <Section>
        <RadioInputGroup label="This is a/an:">
          <RadioInput
            id=""
            name=""
            label="Initial Application"
            />
          <RadioInput
            id=""
            name=""
            label="Renewal"
            />
        </RadioInputGroup>
        <RadioInputGroup label="Has this employer ever applied . . . ?">
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
        <RadioInputGroup label="Has this employer previously held a 14C certificate?">
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
        {/* if('Yes') */}
        <TextInput
          id=""
          name=""
          label="List the most recently held main establishment certificate number"
          pattern="\d{2}-\d{5}-\d{1}-\d{3}"
          />
        {/* endif */}
        <CheckboxInputGroup label="This is a request for authority . . .">
          <CheckboxInput
            id=""
            name=""
            label="Community Rehabilitation Center (Work Center)"
            />
          <CheckboxInput
            id=""
            name=""
            label="Hospital/Residence Care Facility (Patient Workers)"
            />
          <CheckboxInput
            id=""
            name=""
            label="School Work Experience Program (SWEP)"
            />
          <CheckboxInput
            id=""
            name=""
            label="Business Establishment"
            />
        </CheckboxInputGroup>
        <TextInput
          id=""
          name=""
          label="Legal name of Employer"
          />
        <RadioInputGroup label="Does employer have a trade name?">
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
        {/* if('Yes') */}
        <TextInput
          id=""
          name=""
          label="Trade Name"
          />
        {/* endif */}
        <RadioInputGroup label="Has your legal name changed since last application?">
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
        {/* if('Yes') */}
        <TextInput
          id=""
          name=""
          label="Prior Name of Employer"
          />
        {/* endif */}
        <TextInput
          id=""
          name=""
          label="Federal Employer Identification Number"
          pattern="\d{3}-\d{7}"
          />
        <fieldset>
          <legend>Application Contact</legend>
          <TextInput
            id=""
            name=""
            label="Name of Contact"
            />
          <TextInput
            id=""
            name=""
            label="Telephone"
            pattern="(\d{3}) \d{3}-\d{4}"
            />
          <TextInput
            id=""
            name=""
            label="Fax"
            pattern="(\d{3}) \d{3}-\d{4}"
            />
          <EmailInput
            id=""
            name=""
            label="Email address"
            />
        </fieldset>
        <AddressInputGroup label="Physical Address of Employer" />
        <CheckboxInput
          id=""
          name=""
          label="Mailing address is different"
          />
        {/* if(checked) */}
        <AddressInputGroup label="Mailing Address of Employer" />
        {/* endif */}
        <RadioInputGroup label="Do you have a parent organization?">
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
        {/* if('Yes') */}
        <TextInput
          id=""
          name=""
          label="Legal Name"
          />
        <TextInput
          id=""
          name=""
          label="Trade Name"
          />
        <AddressInputGroup />
        <CheckboxInput
          id=""
          name=""
          label="Check if mail should be sent here"
          />
        {/* endif */}
        <RadioInputGroup label="Employer Status">
          <RadioInput
            id=""
            name=""
            label="Public"
            />
          <RadioInput
            id=""
            name=""
            label="XXXXX"
            />
        </RadioInputGroup>
        <DateInput
          id=""
          name=""
          label="When did last fiscal quarter end?"
          />
        <NumberInput
          id=""
          name=""
          label="How many workers with disabilities were employed at ALL establishments and worksites during most recent fiscal quarter?"
          />
        <div className="usa-grid">
          <NumberInput
            className="usa-width-one-fourth"
            id=""
            name=""
            label="Community"
            />
          <NumberInput
            className="usa-width-one-fourth"
            id=""
            name=""
            label="Hospital"
            />
          <NumberInput
            className="usa-width-one-fourth"
            id=""
            name=""
            label="School"
            />
          <NumberInput
            className="usa-width-one-fourth"
            id=""
            name=""
            label="Business"
            />
        </div>
        <fieldset>
          <legend>Government Contracts</legend>
          <RadioInputGroup label="Does the employer manufacture items for the federal government under the PCA?">
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
          <RadioInputGroup label="Does the employer perform any services for the federal government under the SCA?">
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
            <RadioInput
              id=""
              name=""
              label="No, but intend to in next 2 years"
              />
          </RadioInputGroup>
          {/* if('Yes') */}
          <NumberInput
            id=""
            name=""
            label="What is the total number of SCA-covered contracts under which workers with disabilities are employed and earning subminimum wages?"
            />
          <label>Attach copies of all current SCA Wage Determinations . . .  are employed and earning subminimum wages</label>
          <button className="usa-button-outline" type="button">Attach</button>
          {/* endif */}
          <RadioInputGroup label="Since Jan. 1, 2015, has this employer entered . . . subject to order 13658(. . .)?">
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
            <RadioInput
              id=""
              name=""
              label="No, but intend to in next 2 years"
              />
          </RadioInputGroup>
        </fieldset>
      </Section>
    );
  }
});


module.exports = Employer;
