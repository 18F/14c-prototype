const React = require('react');


const DropdownInput = (props) => {
  return (
    <div>
      {props.label ? <label htmlFor={props.id}>{props.label}</label> : null}
      <select id={props.id} name={props.name}>
        {props.children}
      </select>
    </div>
  );
};


module.exports = DropdownInput;
