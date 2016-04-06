const React = require('react');

const Link = require('react-router').Link;

const Section = require('../templates/Section.jsx');


let Home = React.createClass({
  render: () => {
    return (
      <div id="home">
        <h3>Authority to employ workers with disabilities, at submininum wages.</h3>
        <div>
          <Link to="/1"><button type="button">Start application</button></Link>
        </div>
        <div className="usa-grid" id="options">
          <div className="usa-width-one-half">
            <h3>First-time applicants</h3>
            <p>Quasar.</p>
            <p>Not a sunrise but a galaxyrise another world rogue gathered by gravity billions upon billions light years galaxies, take root and flourish, paroxysm of global death, shores of the cosmic ocean.</p>
            <p>Permanence of the stars, a mote of dust suspended in a sunbeam, birth, with pretty stories for which there's little good evidence. Two ghostly white figures in coveralls and helmets are soflty dancing!</p>
          </div>
          <div className="usa-width-one-half">
            <h3>Certification renewals</h3>
            <p>Rig Veda the ash of stellar alchemy made in the interiors of collapsing stars paroxysm of global death rings of Uranus gathered by gravity laws of physics!</p>
            <p>Realm of the galaxies. At the edge of forever, emerged into consciousness vanquish the impossible Vangelis great turbulent clouds, kindling the energy hidden in matter Vangelis.</p>
          </div>
        </div>
        <div id="about">
          <h3>About this prototype</h3>
          <p>This prototype is the result of a two-day workshop hosted by 18F. It was a collaboration between WHD's 14C CERT and policy team working with 18F designers and product strategists.</p>
          <p>The goal was to explore one way (of many ways) how an online application process or wizard might work for 14C. These pages are a nod to many solutions.</p>
          <p>It is not accurate. There will be typos, missing information, and inconsistencies. A full design process would build in accuracy, collaboration, and optimization.</p>
          <p>Visualizations are useful however. They illuminate:</p>
          <ul>
            <li>Design: user-centered design opportunities, different ways to consider interactivity and navigation patterns</li>
            <li>Language: opportunities to be brief, where to include references to longer official policy</li>
            <li>Complexity: Is this a large endeavor or a small one? Prototypes help vendors provide more accurate cost and staff estimates.</li>
          </ul>
          <p>October 18, 2015 {/* &middot; */}: 18F Consulting</p>
        </div>
      </div>
    );
  }
});


module.exports = Home;
