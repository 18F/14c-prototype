const React = require('react');


const CheckboxInput = (props) => {
  return (
    <li>
      <input type="checkbox" id={props.id} name={props.name} />
      <label htmlFor={props.id}>{props.label}</label>
    </li>
  );
};


module.exports = CheckboxInput;
