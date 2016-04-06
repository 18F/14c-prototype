const React = require('react');


//let RadioInput = React.createClass({
//  propTypes: {
//    id: React.PropTypes.string,
//    name: React.PropTypes.string,
//    label: React.PropTypes.string
//  },
//  render: () => {
//    return (
//      <li>
//        <input type="radio" id={this.props.id} name={this.props.name} />
//        <label htmlFor={this.props.id}>{this.props.label}</label>
//      </li>
//    );
//  }
//});

const RadioInput = (props) => {
  return (
    <li>
      <input type="radio" id={props.id} name={props.name} />
      <label htmlFor={props.id}>{props.label}</label>
    </li>
  );
};


module.exports = RadioInput;
