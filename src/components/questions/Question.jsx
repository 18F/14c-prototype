const React = require('react');


const Question = (props) => {
  return (
    <div className="usa-grid question">
      {props.children}
    </div>
  );
};


module.exports = Question;
