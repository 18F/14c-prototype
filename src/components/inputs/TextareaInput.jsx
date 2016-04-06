const React = require('react');


const TextareaInput = (props) => {
  return (
    <div>
      {props.label ? <label htmlFor={props.id}>{props.label}</label> : null}
      <textarea id={props.id} name={props.name} placeholder={props.placeholder}></textarea>
    </div>
  );
};


module.exports = TextareaInput;
