import React from 'react'

export default function StateDropdown( {onChange} ) {
    const stateOptions = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
    const dropdownEl = [];
    stateOptions.forEach((state) => {
        const optionEl = <option value={state}>{state}</option>;
        dropdownEl.push(optionEl);
    })
  return (
    <div>
        <select name="state" id="state-select" onChange={onChange}>
            <option selected disabled value="state">State</option>
            {dropdownEl};
        </select>

    </div>
  )
}
