const React = require('react');


//let NumberInput = React.createClass({
//  propTypes: {
//    id: React.PropTypes.string,
//    name: React.PropTypes.string,
//    label: React.PropTypes.string
//  },
//  render: () => {
//    return (
//      <div>
//        <label htmlFor={this.props.id}>{this.props.label}</label>
//        <input type="number" id={this.props.id} name={this.props.name} />
//      </div>
//    );
//  }
//});

const NumberInput = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="number" id={props.id} name={props.name} />
    </div>
  );
};


module.exports = NumberInput;
