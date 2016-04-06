const React = require('react');


//let DateInput = React.createClass({
//  propTypes: {
//    id: React.PropTypes.string,
//    name: React.PropTypes.string,
//    label: React.PropTypes.string
//  },
//  render: () => {
//    let year = (new Date()).getFullYear();
//
//    return (
//      <fieldset>
//        <legend>{this.props.label}</legend>
//        <div className="usa-date-of-birth">
//          <div className="usa-datefield usa-form-group usa-form-group-month">
//            <label htmlFor={`${this.props.id}-month`}>Month</label>
//            <input type="number" className="usa-form-control" id={`${this.props.id}-month`} name={`${this.props.name}-month`} pattern="0?[1-9]|1[012]" min="1" max="12" />
//          </div>
//          <div className="usa-datefield usa-form-group usa-form-group-day">
//            <label htmlFor={`${this.props.id}-day`}>Day</label>
//            <input type="number" className="usa-form-control" id={`${this.props.id}-day`} name={`${this.props.name}-day`} pattern="0?[1-9]|1[0-9]|2[0-9]|3[01]" min="1" max="31" />
//          </div>
//          <div className="usa-datefield usa-form-group usa-form-group-year">
//            <label htmlFor={`${this.props.id}-year`}>Year</label>
//            <input type="number" className="usa-form-control" id={`${this.props.id}-year`} name={`${this.props.name}-year`} pattern="[0-9]{4}" min={year - 1} max={year} />
//          </div>
//        </div>
//      </fieldset>
//    );
//  }
//});

const DateInput = (props) => {
  let year = (new Date()).getFullYear();

  return (
    <fieldset>
      <legend>{props.label}</legend>
      <div className="usa-date-of-birth">
        <div className="usa-datefield usa-form-group usa-form-group-month">
          <label htmlFor={`${props.id}-month`}>Month</label>
          <input type="number" className="usa-form-control" id={`${props.id}-month`} name={`${props.name}-month`} pattern="0?[1-9]|1[012]" min="1" max="12" />
        </div>
        <div className="usa-datefield usa-form-group usa-form-group-day">
          <label htmlFor={`${props.id}-day`}>Day</label>
          <input type="number" className="usa-form-control" id={`${props.id}-day`} name={`${props.name}-day`} pattern="0?[1-9]|1[0-9]|2[0-9]|3[01]" min="1" max="31" />
        </div>
        <div className="usa-datefield usa-form-group usa-form-group-year">
          <label htmlFor={`${props.id}-year`}>Year</label>
          <input type="number" className="usa-form-control" id={`${props.id}-year`} name={`${props.name}-year`} pattern="[0-9]{4}" min={year - 1} max={year} />
        </div>
      </div>
    </fieldset>
  );
};


module.exports = DateInput;
