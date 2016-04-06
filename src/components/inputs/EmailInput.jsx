const React = require('react');


const EmailInput = (props) => {
  return (
    <div>
      {props.label ? <label htmlFor={props.id}>{props.label}</label> : null}
      <input type="email" id={props.id} name={props.name} placeholder="Email address" />
    </div>
  );
};


module.exports = EmailInput;
