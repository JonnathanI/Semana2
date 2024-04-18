import React, { useState } from 'react';

const ColorAry = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

const ohms = [
  [1000000000, 'giga'],
  [1000000, 'mega'],
  [1000, 'kilo'],
];

function ResistorValueCalculator() {
  const [band1, setBand1] = useState('black');
  const [band2, setBand2] = useState('black');
  const [band3, setBand3] = useState('black');

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  const decodedResistorValue = () => {
    const num = (ColorAry.indexOf(band1) * 10 + ColorAry.indexOf(band2)) * 10 ** ColorAry.indexOf(band3);
    const [divisor, prefix] = ohms.find(([divisor]) => num >= divisor) || [1, ''];
    return `${num / divisor} ${prefix}ohms`;
  };

  const handleCalculate = () => {
    const result = decodedResistorValue();
    alert(`Decoded Resistor Value: ${result}`);
  };

  return (
    <div>
      <div>
        <label htmlFor="band1">First Band:</label>
        <select id="band1" value={band1} onChange={(e) => handleChange(e, setBand1)}>
          {ColorAry.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="band2">Second Band:</label>
        <select id="band2" value={band2} onChange={(e) => handleChange(e, setBand2)}>
          {ColorAry.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="band3">Third Band:</label>
        <select id="band3" value={band3} onChange={(e) => handleChange(e, setBand3)}>
          {ColorAry.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
    </div>
  );
}

export default ResistorValueCalculator;
