const React = require('react');

// const RadioInput = require('../inputs/RadioInput.jsx');


//let RadioInputGroup = React.createClass({
//  // @todo Add bullet-proof validation.
//  propTypes: {
//    label: React.PropTypes.string
//    // children: React.PropTypes.arrayOf(RadioInput)
//  },
//  render: () => {
//    return (
//      <fieldset className="usa-fieldset-inputs">
//        <legend>{this.props.label}</legend>
//        <ul className="usa-unstyled-list">
//          {this.props.children}
//        </ul>
//      </fieldset>
//    );
//  }
//});

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
