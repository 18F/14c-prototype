const React = require('react');

const Link = require('react-router').Link;

const CurrencyInput = require('../inputs/CurrencyInput.jsx');
const DateInput = require('../inputs/DateInput.jsx');
const NumberInput = require('../inputs/NumberInput.jsx');
const PWSSourceInputGroup = require('../groups/PWSSourceInputGroup.jsx');
const Question = require('../questions/Question.jsx');
const QuestionInput = require('../questions/QuestionInput.jsx');
const RadioInput = require('../inputs/RadioInput.jsx');
const RadioInputGroup = require('../groups/RadioInputGroup.jsx');
const Section = require('../templates/Section.jsx');
const TextInput = require('../inputs/TextInput.jsx');
const TextareaInput = require('../inputs/TextareaInput.jsx');


const WageDataDetails = () => {
  return (
    <Section>
      <Question>
        <QuestionInput heading="How did this employer pay subminimum wage rate to workers . . . during the last fiscal year?">
          <RadioInputGroup>
            <RadioInput id="howSubminimumWagePaid:hourly" name="howSubminimumWagePaid" value="hourly" label="Hourly" />
            <RadioInput id="howSubminimumWagePaid:piece" name="howSubminimumWagePaid" value="piece" label="Piece" />
            <RadioInput id="howSubminimumWagePaid:both" name="howSubminimumWagePaid" value="both" label="Both" />
          </RadioInputGroup>
        </QuestionInput>
      </Question>

      <Question>
        <QuestionInput heading="How many workers do you pay hourly?">
          <NumberInput id="numHourlyWorkers" name="numHourlyWorkers" />
        </QuestionInput>
      </Question>

      <div className="usa-grid">
        <div className="usa-width-two-thirds">
          <h3>What is the contract . . . ?</h3>
          <TextInput id="contract:name" name="contract:name" label="Name of Contract" placeholder="Name of Contract" />
          <TextareaInput id="contract:description" name="contract:description" label="Description of work" placeholder="Describe the work." />
        </div>
      </div>

      <Question>
        <QuestionInput heading="Which method did you use to determine Prevailing Wage for the contract identified above?">
          <RadioInputGroup>
            <RadioInput id="prevailingWageMethod:study" name="prevailingWageMethod" value="study" label="Prevailing Wage Study" />
            <RadioInput id="prevailingWageMethod:alternate" name="prevailingWageMethod" value="alternate" label="Alternate Wage Data" />
            <RadioInput id="prevailingWageMethod:SCA" name="prevailingWageMethod" value="SCA" label="SCA wage determination" />
          </RadioInputGroup>
        </QuestionInput>
      </Question>

      {/* (() => {
        switch(this.state.prevailingWageMethod) {
          case 'study':
            return <PWSSourceInputGroup></PWSSourceInputGroup>;
            break;

          case 'alternate':
            return (
              <div>
                <Question>
                <QuestionInput heading="Description of work (including codes . . .)">
                  <TextareaInput id="alternate:description" name="alternate:description" placeholder="Describe ????" />
                </QuestionInput>
                </Question>

                <Question>
                  <QuestionInput heading="Alternate data source">
                    <TextInput id="alternate:source" name="alternate:source" placeholder="Enter alternate data source" />
                  </QuestionInput>
                </Question>

                <Question>
                <QuestionInput heading="Prevailing wage provided">
                  <CurrencyInput id="alternate:wageProvided" name="alternate:wageProvided" />
                </QuestionInput>
                </Question>

                <Question>
                  <QuestionInput heading="Date data retrieved">
                    <DateInput id="alternate:dateReceived" name="alternate:dateReceived" />
                  </QuestionInput>
                </Question>
              </div>
            );
            break;

          case 'SCA':
            return (
              <div>
                <Question>
                  <QuestionInput heading="Attach the applicable SCA wage determination">
                    <div className="usa-grid attach">
                      <div className="usa-width-one-sixth">
                        <button className="usa-button-outline" type="button">Attach</button>
                      </div>
                      <div className="usa-width-five-sixths">
                        <i>Upload PDF, JPG, or PNG no larger than X MB.</i>
                      </div>
                    </div>
                  </QuestionInput>
                </Question>
              </div>
            );
            break;
        }
      })() */}
      <hr />
      <div>
        <Link to="/2"><button type="button">Back</button></Link>
        <button type="button">Save and continue working on later</button>
        <Link to="/4"><button type="button">Next</button></Link>
      </div>
    </Section>
  );
};


module.exports = WageDataDetails;
