const React = require('react');

const Section = require('../templates/Section.jsx');
const NumberInput = require('../inputs/NumberInput.jsx');


let WageData = React.createClass({
  render: () => {
    return (
      <Section>
        <NumberInput id="" name="" label="How frequently (in months) does the employer conduct work measurements . . . who is paid hourly?" />
        <div>
          <label>Attach a work measurement or time study for one . . . ?</label>
          <button className="usa-button-outline" type="button">Attach</button>
        </div>
      </Section>
    );
  }
});


module.exports = WageData;
