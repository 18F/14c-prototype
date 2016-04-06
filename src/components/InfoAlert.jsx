const React = require('react');


let InfoAlert = (props) => {
  return (
    <div className="usa-alert usa-alert-info">
      <div className="usa-alert-body">
        <h3 className="usa-alert-heading">{props.heading}</h3>
        <p className="usa-alert-text">{props.text}</p>
      </div>
    </div>
  );
};


module.exports = InfoAlert;