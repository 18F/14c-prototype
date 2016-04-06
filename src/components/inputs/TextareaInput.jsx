const React = require('react');


//let TextareaInput = React.createClass({
//  propTypes: {
//    id: React.PropTypes.string,
//    name: React.PropTypes.string,
//    label: React.PropTypes.string
//  },
//  render: () => {
//    return (
//      <div>
//        <label htmlFor={this.props.id}>{this.props.label}</label>
//        <textarea id={this.props.id} name={this.props.name}></textarea>
//      </div>
//    );
//  }
//});

const TextareaInput = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea id={props.id} name={props.name}></textarea>
    </div>
  );
};


module.exports = TextareaInput;
