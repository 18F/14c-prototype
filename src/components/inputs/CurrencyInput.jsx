const React = require('react');


const CurrencyInput = (props) => {
  return (
    <div>
      {props.label ? <label htmlFor={props.id}>{props.label}</label> : null}
      <input type="number" id={props.id} name={props.name} placeholder="$" />
    </div>
  );
};


module.exports = CurrencyInput;
