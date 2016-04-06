const React = require('react');


const QuestionHelpText = (props) => {
  return (
    <div className="usa-width-one-third">
      <div className="usa-alert usa-alert-info">
        <div className="usa-alert-body">
          <h3 className="usa-alert-heading">{props.heading}</h3>
          <p className="usa-alert-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};


module.exports = QuestionHelpText;
