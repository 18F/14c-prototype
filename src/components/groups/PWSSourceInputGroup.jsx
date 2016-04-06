const React = require('react');

const CurrencyInput = require('../inputs/CurrencyInput.jsx');
const DateInput = require('../inputs/DateInput.jsx');
const Question = require('../questions/Question.jsx');
const QuestionInput = require('../questions/QuestionInput.jsx');
const TextInput = require('../inputs/TextInput.jsx');
const TextareaInput = require('../inputs/TextareaInput.jsx');


let PWSSourceInputGroup = React.createClass({
  render: () => {
    return (
      <div>
        <h2>PWS Source</h2>

        <Question>
          <QuestionInput heading="Contact information">
            <TextInput id="PWSContactName" name="PWSContactName" label="Name of company" placeholder="Company Name" />
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput>
            <TextInput id="PWSContactAddress" name="PWSContactAddress" label="Address"/>
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput>
            <TextInput id="PWSContactPhone" name="PWSContactPhone" pattern="(\d{3}) \d{3}-\d{4}" label="Phone" placeholder="(###) ###-####" />
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Individual contacted">
            <TextInput id="PWSIndividualName" name="PWSIndividualName" label="Name" placeholder="Full Name" />
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput>
            <TextInput id="PWSIndividualTitle" name="PWSIndividualTitle" label="Title" placeholder="Title" />
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Date contacted">
            <DateInput id="PWSDateContacted" name="PWSDateContacted" />
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Brief description">
            <TextareaInput id="PWSDescription" name="PWSDescription" placeholder="Describe ????" />
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Basis for conducting . . .">
            <TextareaInput id="PWSBasis" name="PWSBasis" placeholder="Helpful prompt to fill this part out" />
          </QuestionInput>
        </Question>

        <Question>
          <QuestionInput heading="Wage provided">
            <CurrencyInput id="PWSWageProvided" name="PWSWageProvided" />
          </QuestionInput>
        </Question>
      </div>
    );
  }
});


module.exports = PWSSourceInputGroup;
