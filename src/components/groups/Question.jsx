const React = require('react');


let Question = (props) => {
  return (
    <div className="usa-grid">
      <div className="usa-width-two-thirds">
        {props.children}
      </div>
      <div className="usa-width-one-third">
        {props['helpText']}
      </div>
    </div>
  );
};


module.exports = Question;