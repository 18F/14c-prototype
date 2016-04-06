const React = require('react');


const QuestionInput = (props) => {
  return (
    <div className="usa-width-two-thirds">
      <h3>{props.heading}</h3>
      {props.children}
    </div>
  );
};


module.exports = QuestionInput;
