const React = require('react');

const CheckboxInput = require('../inputs/CheckboxInput.jsx');


//let CheckboxInputGroup = React.createClass({
//  // @todo Add bullet-proof validation.
//  propTypes: {
//    label: React.PropTypes.string
//    // children: React.PropTypes.arrayOf(CheckboxInput)
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

const CheckboxInputGroup = (props) => {
  return (
    <fieldset className="usa-fieldset-inputs">
      <legend>{props.label}</legend>
      <ul className="usa-unstyled-list">
        {props.children}
      </ul>
    </fieldset>
  );
};


module.exports = CheckboxInputGroup;
