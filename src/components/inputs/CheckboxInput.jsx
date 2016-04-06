const React = require('react');


//let CheckboxInput = React.createClass({
//  propTypes: {
//    id: React.PropTypes.string,
//    name: React.PropTypes.string,
//    label: React.PropTypes.string
//  },
//  render: () => {
//    return (
//      <li>
//        <input type="checkbox" id={this.props.id} name={this.props.name} />
//        <label htmlFor={this.props.id}>{this.props.label}</label>
//      </li>
//    );
//  }
//});

const CheckboxInput = (props) => {
  return (
    <li>
      <input type="checkbox" id={props.id} name={props.name} />
      <label htmlFor={props.id}>{props.label}</label>
    </li>
  );
};


module.exports = CheckboxInput;
