const React = require('react');


const RadioInputGroup = (props) => {
  return (
    <fieldset className="usa-fieldset-inputs">
      <legend>{props.label}</legend>
      <ul className="usa-unstyled-list">
        {props.children}
      </ul>
    </fieldset>
  );
};


module.exports = RadioInputGroup;
