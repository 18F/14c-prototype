const React = require('react');


const TextInput = (props) => {
  return (
    <div>
      {props.label ? <label htmlFor={props.id}>{props.label}</label> : null}
      <input type="text" id={props.id} name={props.name} pattern={props.pattern} placeholder={props.placeholder} />
    </div>
  );
};


module.exports = TextInput;
