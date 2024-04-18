import React, { useState } from 'react';

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
] as const;

type TResistorColors = typeof COLORS[number];

export function decodedValue([band1, band2]: TResistorColors[]): number {
  return (COLORS.indexOf(band1) * 10) + COLORS.indexOf(band2)
}

function App() {
  const [band1, setBand1] = useState<TResistorColors>("black");
  const [band2, setBand2] = useState<TResistorColors>("black");

  const handleChangeBand1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBand1(event.target.value as TResistorColors);
  };

  const handleChangeBand2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBand2(event.target.value as TResistorColors);
  };

  const handleCalculate = () => {
    const decoded = decodedValue([band1, band2]);
    alert(`Valor decodificado: ${decoded}`);
  };

  return (
    <div>
      <div>
        <label htmlFor="band1">Color de la banda 1:</label>
        <select id="band1" value={band1} onChange={handleChangeBand1}>
          {COLORS.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="band2">Color de la banda 2:</label>
        <select id="band2" value={band2} onChange={handleChangeBand2}>
          {COLORS.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>
      <button onClick={handleCalculate}>Calcular</button>
    </div>
  );
}

export default App;
