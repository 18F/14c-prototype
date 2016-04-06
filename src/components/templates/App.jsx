const React = require('react');


const App = (props) => {
  let styles = {
    header: {
      padding: '20px'
    }
  };

  return (
    <div className="usa-grid">
      <header style={styles.header}>DOL/WHD <i>14C online application prototype</i></header>
      <div id="content">
        {props.children}
      </div>
    </div>
  );
};


module.exports = App;
