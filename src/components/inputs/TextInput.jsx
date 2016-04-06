const React = require('react');


//let TextInput = React.createClass({
//  propTypes: {
//    id: React.PropTypes.string,
//    name: React.PropTypes.string,
//    label: React.PropTypes.string,
//    pattern: React.PropTypes.string
//  },
//  render: () => {
//    return (
//      <div>
//        <label htmlFor={this.props.id}>{this.props.label}</label>
//        <input type="text" id={this.props.id} name={this.props.name} pattern={this.props.pattern} />
//      </div>
//    );
//  }
//});

const TextInput = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" id={props.id} name={props.name} pattern={props.pattern} />
    </div>
  );
};


module.exports = TextInput;