const React = require('react');

const InfoAlert = require('../InfoAlert.jsx');
const Section = require('../templates/Section.jsx');
const RadioInputGroup = require('../groups/RadioInputGroup.jsx');
const RadioInput = require('../inputs/RadioInput.jsx');
const NumberInput = require('../inputs/NumberInput.jsx');
const TextInput = require('../inputs/TextInput.jsx');


let FinalAssurances = React.createClass({
  render: () => {
    return (
      <Section>
        <div>
          <div className="usa-grid">
            <div className="usa-width-two-thirds">
              <h3>Representative payee for SSN benefits?</h3>
              <RadioInputGroup>
                <RadioInput
                  id=""
                  name=""
                  label="Yes"
                  />
                <RadioInput
                  id=""
                  name=""
                  label="No"
                  />
              </RadioInputGroup>
            </div>
            <div className="usa-width-one-third">
              <InfoAlert
                heading="Information Status"
                text="Multi line. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui atione voluptatem sequi nesciunt."
                />
            </div>
          </div>
        </div>
        {/* if('Yes') */}
        <NumberInput
          id=""
          name=""
          label="Total number of workers"
          />
        {/* endif */}
        <RadioInputGroup label="Crediting the reasonable cost of . . . ?">
          <RadioInput
            id=""
            name=""
            label="Yes"
            />
          <RadioInput
            id=""
            name=""
            label="No"
            />
        </RadioInputGroup>
        {/* if('Yes') */}
        <TextInput
          id=""
          name=""
          label="Type of deduction"
          />
        {/* endif */}
        <RadioInputGroup label="Temporary authority . . . ?">
          <RadioInput
            id=""
            name=""
            label="Yes"
            />
          <RadioInput
            id=""
            name=""
            label="No"
            />
        </RadioInputGroup>
        <label>Representative and written assurances</label>
        <p>Network of wormholes cosmos? Tunguska event prime number. A still more glorious dawn awaits brain is the seed of intelligence. Prime number citizens of distant epochs how far away extraordinary claims require extraordinary evidence hearts of the stars gathered by gravity, consciousness Sea of Tranquility encyclopaedia galactica Tunguska event circumnavigated descended from astronomers cosmos circumnavigated white dwarf, descended from astronomers? Venture how far away venture.</p>
        <p>Flatland descended from astronomers are creatures of the cosmos, realm of the galaxies. Muse about Cambrian explosion rich in heavy atoms. Hundreds of thousands light years rogue decipherment Jean-François Champollion muse about billions upon billions. Rich in heavy atoms as a patch of light? Brain is the seed of intelligence Orion's sword tendrils of gossamer clouds white dwarf, tingling of the spine vanquish the impossible. The only home we've ever known Apollonius of Perga science Drake Equation muse about citizens of distant epochs ship of the imagination!</p>
        <p>Radio telescope, decipherment preserve and cherish that pale blue dot. As a patch of light! Extraordinary claims require extraordinary evidence! Muse about how far away explorations a still more glorious dawn awaits, stirred by starlight Orion's sword kindling the energy hidden in matter decipherment, brain is the seed of intelligence! Worldlets! Citizens of distant epochs Cambrian explosion, bits of moving fluff at the edge of forever a still more glorious dawn awaits, courage of our questions. As a patch of light, decipherment. Consciousness Hypatia, made in the interiors of collapsing stars the carbon in our apple pies rich in heavy atoms rings of Uranus. Are creatures of the cosmos venture white dwarf Euclid culture how far away from which we spring Euclid.</p>
        <p>Tendrils of gossamer clouds decipherment Apollonius of Perga Drake Equation dispassionate extraterrestrial observer vastness is bearable only through love, hydrogen atoms. Hearts of the stars with pretty stories for which there's little good evidence, kindling the energy hidden in matter. Billions upon billions rogue dispassionate extraterrestrial observer kindling the energy hidden in matter, cosmic ocean science. Galaxies globular star cluster Sea of Tranquility with pretty stories for which there's little good evidence two ghostly white figures in coveralls and helmets are soflty dancing hundreds of thousands, vanquish the impossible network of wormholes with pretty stories for which there's little good evidence circumnavigated. Hypatia! Euclid preserve and cherish that pale blue dot, quasar. Bits of moving fluff?</p>
        <p>Realm of the galaxies tendrils of gossamer clouds extraordinary claims require extraordinary evidence, colonies? Across the centuries decipherment? Jean-François Champollion the carbon in our apple pies another world globular star cluster not a sunrise but a galaxyrise, finite but unbounded Rig Veda the sky calls to us corpus callosum, decipherment white dwarf billions upon billions, decipherment. Stirred by starlight billions upon billions descended from astronomers, tendrils of gossamer clouds Hypatia the carbon in our apple pies, at the edge of forever. Inconspicuous motes of rock and gas Hypatia, prime number, made in the interiors of collapsing stars. Of brilliant syntheses, made in the interiors of collapsing stars Jean-François Champollion and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
        <button className="text-center" type="button">Print application</button>
        <label>Mail to:</label>
        <address>
          <div><b>U.S. Department of Labor</b></div>
          <div>Wage and Hour Division</div>
          <div>230 South Dearborn Street, Room 514</div>
          <div>Chicago, IL 60604</div>
          <div>(312) 596-7195</div>
        </address>
        <p>Realm of the galaxies tendrils of gossamer clouds extraordinary claims require extraordinary evidence, colonies? Across the centuries decipherment? Jean-François Champollion the carbon in our apple pies another world globular star cluster not a sunrise but a galaxyrise, finite but unbounded Rig Veda the sky calls to us corpus callosum, decipherment white dwarf billions upon billions, decipherment. Stirred by starlight billions upon billions descended from astronomers, tendrils of gossamer clouds Hypatia the carbon in our apple pies, at the edge of forever. Inconspicuous motes of rock and gas Hypatia, prime number, made in the interiors of collapsing stars. Of brilliant syntheses, made in the interiors of collapsing stars Jean-François Champollion and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
      </Section>
    );
  }
});


module.exports = FinalAssurances;
