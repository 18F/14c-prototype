const React = require('react');


//let DropdownInput = React.createClass({
//  propTypes: {
//    id: React.PropTypes.string,
//    name: React.PropTypes.string,
//    label: React.PropTypes.string
//    // @todo `children` can only be `<option>` tags.
//  },
//  render: () => {
//    return (
//      <div>
//        <label htmlFor={this.props.id}>{this.props.label}</label>
//        <select id={this.props.id} name={this.props.name}>
//          {this.props.children}
//        </select>
//      </div>
//    );
//  }
//});

const DropdownInput = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <select id={props.id} name={props.name}>
        {props.children}
      </select>
    </div>
  );
};


module.exports = DropdownInput;
