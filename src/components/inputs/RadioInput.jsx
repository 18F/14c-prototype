const React = require('react');


const RadioInput = (props) => {
  return (
    <li>
      <input type="radio" id={props.id} name={props.name} value={props.value} />
      <label htmlFor={props.id}>{props.label}</label>
    </li>
  );
};


module.exports = RadioInput;
