const React = require('react');

const Link = require('react-router').Link;

const NumberInput = require('../inputs/NumberInput.jsx');
const Question = require('../questions/Question.jsx');
const QuestionHelpText = require('../questions/QuestionHelpText.jsx');
const QuestionInput = require('../questions/QuestionInput.jsx');
const RadioInput = require('../inputs/RadioInput.jsx');
const RadioInputGroup = require('../groups/RadioInputGroup.jsx');
const Section = require('../templates/Section.jsx');
const TextInput = require('../inputs/TextInput.jsx');


const FinalAssurances = () => {
  return (
    <Section>
      <Question>
        <QuestionInput heading="Representative payee for SSN benefits?">
          <RadioInputGroup>
            <RadioInput id="payeeForSSN:yes" name="payeeForSSN" value="yes" label="Yes" />
            <RadioInput id="payeeForSSN:no" name="payeeForSSN" value="no" label="No" />
          </RadioInputGroup>
          {/* this.state.showTotalNumWorkers ? <NumberInput id="totalNumWorkers" name="totalNumWorkers" label="Total number of workers" /> : null */}
        </QuestionInput>
        {/*
          <QuestionHelpText
            heading="Information Status"
            text="Multi line. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
            hidden="true"
          />
        */}
      </Question>
      <Question>
        <QuestionInput heading="Crediting the reasonable cost of . . . ?">
          <RadioInputGroup>
            <RadioInput id="creditingReasonableCost:yes" name="creditingReasonableCost" value="yes" label="Yes" />
            <RadioInput id="creditingReasonableCost:no" name="creditingReasonableCost" value="no" label="No" />
          </RadioInputGroup>
          {/* this.state.showDeductionType ? <TextInput id="deductionType" name="deductionType" label="Type of deduction" /> : null */}
        </QuestionInput>
      </Question>
      <Question>
        <QuestionInput heading="Temporary authority . . . ?">
          <RadioInputGroup>
            <RadioInput id="tempAuthority:yes" name="tempAuthority" value="yes" label="Yes" />
            <RadioInput id="tempAuthority:no" name="tempAuthority" value="no" label="No" />
          </RadioInputGroup>
        </QuestionInput>
      </Question>
      <div className="usa-grid">
        <div className="usa-width-two-thirds">
          <h3>Representative and written assurances</h3>
          <p>Network of wormholes cosmos? Tunguska event prime number. A still more glorious dawn awaits brain is the seed of intelligence. Prime number citizens of distant epochs how far away extraordinary claims require extraordinary evidence hearts of the stars gathered by gravity, consciousness Sea of Tranquility encyclopaedia galactica Tunguska event circumnavigated descended from astronomers cosmos circumnavigated white dwarf, descended from astronomers? Venture how far away venture.</p>
          <p>Flatland descended from astronomers are creatures of the cosmos, realm of the galaxies. Muse about Cambrian explosion rich in heavy atoms. Hundreds of thousands light years rogue decipherment Jean-François Champollion muse about billions upon billions. Rich in heavy atoms as a patch of light? Brain is the seed of intelligence Orion's sword tendrils of gossamer clouds white dwarf, tingling of the spine vanquish the impossible. The only home we've ever known Apollonius of Perga science Drake Equation muse about citizens of distant epochs ship of the imagination!</p>
          <p>Radio telescope, decipherment preserve and cherish that pale blue dot. As a patch of light! Extraordinary claims require extraordinary evidence! Muse about how far away explorations a still more glorious dawn awaits, stirred by starlight Orion's sword kindling the energy hidden in matter decipherment, brain is the seed of intelligence! Worldlets! Citizens of distant epochs Cambrian explosion, bits of moving fluff at the edge of forever a still more glorious dawn awaits, courage of our questions. As a patch of light, decipherment. Consciousness Hypatia, made in the interiors of collapsing stars the carbon in our apple pies rich in heavy atoms rings of Uranus. Are creatures of the cosmos venture white dwarf Euclid culture how far away from which we spring Euclid.</p>
        </div>
      </div>
      <div className="usa-grid">
        <button className="text-center" type="button">Print application</button>
      </div>
      <div className="usa-grid">
        <div className="usa-width-two-thirds">
          <h3>Mail to:</h3>
          <address>
            <div><b>U.S. Department of Labor</b></div>
            <div>Wage and Hour Division</div>
            <div>230 South Dearborn Street, Room 514</div>
            <div>Chicago, IL 60604</div>
            <div>(312) 596-7195</div>
          </address>
          <p><i>Realm of the galaxies tendrils of gossamer clouds extraordinary claims require extraordinary evidence, colonies? Across the centuries decipherment? Jean-François Champollion the carbon in our apple pies another world globular star cluster not a sunrise but a galaxyrise, finite but unbounded Rig Veda the sky calls to us corpus callosum, decipherment white dwarf billions upon billions, decipherment. Stirred by starlight billions upon billions descended from astronomers, tendrils of gossamer clouds Hypatia the carbon in our apple pies, at the edge of forever. Inconspicuous motes of rock and gas Hypatia, prime number, made in the interiors of collapsing stars. Of brilliant syntheses, made in the interiors of collapsing stars Jean-François Champollion and billions upon billions upon billions upon billions upon billions upon billions upon billions.</i></p>
        </div>
      </div>
      <hr />
      <div>
        <Link to="/4"><button type="button">Back</button></Link>
        <button type="button">Save and continue working on later</button>
      </div>
    </Section>
  );
};


module.exports = FinalAssurances;
