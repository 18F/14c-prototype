const React = require('react');

const Link = require('react-router').Link;

const NumberInput = require('../inputs/NumberInput.jsx');
const Question = require('../questions/Question.jsx');
const QuestionInput = require('../questions/QuestionInput.jsx');
const Section = require('../templates/Section.jsx');


const WageData = () => {
  return (
    <Section>
      <Question>
        <QuestionInput heading="How frequently (in months) does the employer conduct work measurements . . . who is paid hourly?">
          <NumberInput id="freqWorkMeasurements" name="freqWorkMeasurements" />
          {/* this.state.showMonthsAlert ? <div>Alert!</div> : null */}
        </QuestionInput>
      </Question>
      <Question>
        <QuestionInput heading="Attach a work measurement or time study for one . . . ?">
          <div className="usa-grid attach">
            <div className="usa-width-one-sixth">
              <button className="usa-button-outline" type="button">Attach</button>
            </div>
            <div className="usa-width-five-sixths">
              <i>Upload a PDF, JPG, or PNG no larger than X MB.</i>
            </div>
          </div>
        </QuestionInput>
      </Question>
      <hr />
      <div>
        <Link to="/1"><button type="button">Back</button></Link>
        <button type="button">Save and continue working on later</button>
        <Link to="/3"><button type="button">Next</button></Link>
      </div>
    </Section>
  );
};


module.exports = WageData;
