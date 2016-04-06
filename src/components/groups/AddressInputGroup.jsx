const React = require('react');

const TextInput = require('../inputs/TextInput.jsx');


const AddressInputGroup = (props) => {
  return (
    <fieldset>
      <legend>{props.label}</legend>
      <TextInput
        id={`${props.id}-address-1`}
        name={`${props.name}-address-1`}
        label="Street address 1"
        placeholder="Street address 1"
        />
      {
        /*
         <label htmlFor={`${props.id}-address-1`}>Street address 1</label>
         <input type="text" id={`${props.id}-address-1`} name={`${props.name}-address-1`} />
         */
      }
      <TextInput
        id={`${props.id}-address-2`}
        name={`${props.name}-address-2`}
        label="Street address 2 (optional)"
        placeholder="Street address 2 (optional)"
        />
      {
        /*
         <label htmlFor={`${props.id}-address-2`}>Street address 2</label>
         <input type="text" id={`${props.id}-address-2`} name={`${props.name}-address-2`} />
         */
      }
      <div>
        <div className="usa-input-grid usa-input-grid-medium">
          <TextInput
            id={`${props.id}-city`}
            name={`${props.name}-city`}
            label="City"
            placeholder="City"
            />
          {
            /*
             <label htmlFor={`${props.id}-city`}>City</label>
             <input type="text" id={`${props.id}-city`} name={`${props.name}-city`} />
             */
          }
        </div>
        <div className="usa-input-grid usa-input-grid-small">
          <label htmlFor={`${props.id}-state`}>State</label>
          <select id={`${props.id}-state`} name={`${props.name}-state`}>
            <option value=""></option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
      </div>
      <label htmlFor={`${props.id}-zip`}>ZIP</label>
      <input type="text" className="usa-input-medium" id={`${props.id}-zip`} name={`${props.name}-zip`} pattern="[\d]{5}(-[\d]{4})?" data-grouplength="5,4" data-delimiter="-" data-politespace="" />
    </fieldset>
  );
};


module.exports = AddressInputGroup;
