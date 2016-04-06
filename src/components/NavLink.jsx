const React = require('react');
const Link = require('react-router').Link;


let NavLink = (props) => {
  return <Link {...props} activeClassName="active" />
};

module.exports = NavLink;
