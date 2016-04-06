const React = require('react');

const Link = require('react-router').Link;

const AddressInputGroup = require('../groups/AddressInputGroup.jsx');
const CheckboxInput = require('../inputs/CheckboxInput.jsx');
const CheckboxInputGroup = require('../groups/CheckboxInputGroup.jsx');
const DateInput = require('../inputs/DateInput.jsx');
const EmailInput = require('../inputs/EmailInput.jsx');
const NumberInput = require('../inputs/NumberInput.jsx');
const Question = require('../questions/Question.jsx');
const QuestionInput = require('../questions/QuestionInput.jsx');
const RadioInput = require('../inputs/RadioInput.jsx');
const RadioInputGroup = require('../groups/RadioInputGroup.jsx');
const Section = require('../templates/Section.jsx');
const TextInput = require('../inputs/TextInput.jsx');


const Employer = () => {
  return (
    <Section>
      <Question>
        <QuestionInput heading="This is a/an:">
          <RadioInputGroup>
            <RadioInput id="appType:initial" name="appType" value="initial" label="Initial Application" />
            <RadioInput id="appType:renewal" name="appType" value="renewal" label="Renewal" />
          </RadioInputGroup>
        </QuestionInput>
      </Question>

      <Question>
        <QuestionInput heading="Has this employer ever applied . . . ?">
          <RadioInputGroup>
            <RadioInput id="hasApplied:yes" name="hasApplied" value="yes" label="Yes" />
            <RadioInput id="hasApplied:no" name="hasApplied" value="no" label="No" />
          </RadioInputGroup>
        </QuestionInput>
      </Question>

      <Question>
        <QuestionInput heading="Has this employer previously held a 14C certificate?">
          <RadioInputGroup>
            <RadioInput id="hasHeld14C:yes" name="hasHeld14C" value="yes" label="Yes" />
            <RadioInput id="hasHeld14C:no" name="hasHeld14C" value="no" label="No" />
          </RadioInputGroup>
          {/* this.state.showCertNumber ? <TextInput id="certNumber" name="certNumber" label="List the most recently held main establishment certificate number" pattern="\d{2}-\d{5}-\d{1}-\d{3}" placeholder="##-#####-#-###" /> : null */}
        </QuestionInput>
      </Question>

      <Question>
        <QuestionInput heading="This is a request for authority . . .:">
          <CheckboxInputGroup>
            <CheckboxInput id="rfaType:workCenter" name="rfaType" value="workCenter" label="Community Rehabilitation Center (Work Center)" />
            <CheckboxInput id="rfaType:hospital" name="rfaType" value="hospital" label="Hospital/Residence Care Facility (Patient Workers)" />
            <CheckboxInput id="rfaType:SWEP" name="rfaType" value="SWEP" label="School Work Experience Program (SWEP)" />
            <CheckboxInput id="rfaType:business" name="rfaType" value="business" label="Business Establishment" />
          </CheckboxInputGroup>
        </QuestionInput>
      </Question>

      <Question>
        <QuestionInput heading="Legal name of Employer">
          <TextInput id="employerName" name="employerName" placeholder="Employer Name" />
        </QuestionInput>
      </Question>

      <Question>
        <QuestionInput heading="Does employer have a trade name?">
          <RadioInputGroup>
            <RadioInput id="employerHasTradeName:yes" name="employerHasTradeName" value="yes" label="Yes" />
            <RadioInput id="employerHasTradeName:no" name="employerHasTradeName" value="yes" label="No" />
          </RadioInputGroup>
          {/* this.state.showEmployerTradeName ? <TextInput id="employerTradeName" name="employerTradeName" label="Trade Name" placeholder="Trade Name of Employer" /> : null */}
        </QuestionInput>
      </Question>

      <Question>
        <QuestionInput heading="Has your legal name changed since last application?">
          <RadioInputGroup>
            <RadioInput id="hasLegalNameChanged:yes" name="hasLegalNameChanged" value="yes" label="Yes" />
            <RadioInput id="hasLegalNameChanged:no" name="hasLegalNameChanged" value="no" label="No" />
          </RadioInputGroup>
          {/* this.state.showEmployerPriorName ? <TextInput id="employerPriorName" name="employerPriorName" label="Prior Name of Employer" placeholder="Prior Name of Employer" /> : null */}
        </QuestionInput>
      </Question>

      <Question>
        <QuestionInput heading="Federal Employer Identification Number">
          <TextInput id="FEIN" name="FEIN" pattern="\d{3}-\d{7}" placeholder="###-#######" />
        </QuestionInput>
      </Question>

      <div className="usa-grid">
        <div className="usa-width-two-thirds">
          <h3>Application Contact</h3>
          <TextInput id="appContact:name" name="appContact:name" label="Name of Contact" placeholder="First and Last Name" />
          <TextInput id="appContact:phone" name="appContact:phone" label="Telephone" pattern="(\d{3}) \d{3}-\d{4}" placeholder="(###) ###-####" />
          <TextInput id="appContact:fax" name="appContact:fax" label="Fax" pattern="(\d{3}) \d{3}-\d{4}" placeholder="(###) ###-####" />
          <EmailInput id="appContact:email" name="appContact:email" label="Email address" />
        </div>
      </div>

      <div className="usa-grid">
        <div className="usa-width-two-thirds">
          <h3>Physical Address of Employer</h3>
          <AddressInputGroup id="employerPhysicalAddress" name="employerPhysicalAddress" />
          <ul className="usa-unstyled-list">
            <CheckboxInput id="hasDifferentMailingAddress" name="hasDifferentMailingAddress" label="Mailing address is different" />
          </ul>
          {/* this.state.showEmployerMailingAddress ?
            <div>
              <h3>Mailing Address of Employer</h3>
              <AddressInputGroup id="employerMailingAddress" name="employerMailingAddress" />
            </div>
          : null */}
        </div>
      </div>

      <Question>
        <QuestionInput heading="Do you have a parent organization?">
          <RadioInputGroup>
            <RadioInput id="hasParentOrg:yes" name="hasParentOrg" value="yes" label="Yes" />
            <RadioInput id="hasParentOrg:no" name="hasParentOrg" value="no" label="No" />
          </RadioInputGroup>
          {/* this.state.showParentOrg ?
            <div>
              <TextInput id="parentOrgLegalName" name="parentOrgLegalName" label="Legal Name" placeholder="Name of Parent Organization" />
              <TextInput id="parentOrgTradeName" name="parentOrgTradeName" label="Trade Name" placeholder="Trade Name of Parent Organization" />
              <AddressInputGroup />
              <ul className="usa-unstyled-list">
                <CheckboxInput id="sendMailToParentOrg" name="sendMailToParentOrg" label="Check if mail should be sent here" />
              </ul>
            </div>
          : null */}
        </QuestionInput>
      </Question>

      <Question>
        <QuestionInput heading="Employer Status">
          <RadioInputGroup>
            <RadioInput id="employerStatus:public" name="employerStatus" value="public" label="Public" />
            <RadioInput id="employerStatus:XXXXX" name="employerStatus" value="XXXXX" label="XXXXX" />
          </RadioInputGroup>
        </QuestionInput>
      </Question>

      <Question>
        <QuestionInput heading="When did last fiscal quarter end?">
          <DateInput id="lastFiscalQuarterEnd" name="lastFiscalQuarterEnd" />
        </QuestionInput>
      </Question>

      <Question>
        <QuestionInput heading="How many workers with disabilities were employed at ALL establishments and worksites during most recent fiscal quarter?">
          <div className="usa-grid">
            <div className="usa-width-one-fourth">
              <NumberInput id="numDisabledWorkers:community" name="numDisabledWorkers:community" label="Community" />
            </div>
            <div className="usa-width-one-fourth">
              <NumberInput id="numDisabledWorkers:hospital" name="numDisabledWorkers:hospital" label="Hospital" />
            </div>
            <div className="usa-width-one-fourth">
              <NumberInput id="numDisabledWorkers:school" name="numDisabledWorkers:school" label="School" />
            </div>
            <div className="usa-width-one-fourth">
              <NumberInput id="numDisabledWorkers:business" name="numDisabledWorkers:business" label="Business" />
            </div>
          </div>
        </QuestionInput>
      </Question>

      <fieldset>
        <legend>Government Contracts</legend>

        <Question>
          <QuestionInput heading="Does the employer manufacture items for the federal government under the PCA?">
            <RadioInputGroup>
              <RadioInput id="doesPCA:yes" name="doesPCA" value="yes" label="Yes" />
              <RadioInput id="doesPCA:no" name="doesPCA" value="no" label="No" />
            </RadioInputGroup>
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Does the employer perform any services for the federal government under the SCA?">
            <RadioInputGroup>
              <RadioInput id="doesSCA:yes" name="doesSCA" value="yes" label="Yes" />
              <RadioInput id="doesSCA:no" name="doesSCA" value="no" label="No" />
              <RadioInput id="doesSCA:intend" name="doesSCA" value="intend" label="No, but intend to in next 2 years" />
            </RadioInputGroup>
            {/* this.state.showNumSCAContracts ?
              <div>
                <NumberInput id="numSCAContracts" name="numSCAContracts" label="What is the total number of SCA-covered contracts under which workers with disabilities are employed and earning subminimum wages?" />
                <label>Attach copies of all current SCA Wage Determinations . . .  are employed and earning subminimum wages</label>
                <div className="usa-grid attach">
                  <div className="usa-width-one-sixth">
                    <button className="usa-button-outline" type="button">Attach</button>
                  </div>
                  <div className="usa-width-five-sixths">
                    <i>Upload PDF, JPG, or PNG no larger than X MB.</i>
                  </div>
                </div>
              </div>
            : null */}
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Since Jan. 1, 2015, has this employer entered . . . subject to order 13658(. . .)?">
            <RadioInputGroup>
              <RadioInput id="hasEntered:yes" name="hasEntered" value="yes" label="Yes" />
              <RadioInput id="hasEntered:no" name="hasEntered" value="no" label="No" />
              <RadioInput id="hasEntered:intend" name="hasEntered" value="intend" label="No, but intend to in next 2 years" />
            </RadioInputGroup>
          </QuestionInput>
        </Question>
      </fieldset>
      <hr />
      <div>
        <button type="button">Save and continue working on later</button>
        <Link to="/2"><button type="button">Next</button></Link>
      </div>
    </Section>
  );
};


module.exports = Employer;
