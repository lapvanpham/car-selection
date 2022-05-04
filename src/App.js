import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const carList = [
    {
      model: 'Cadillac CT5',
      color: ['Red', 'Blue', 'Green'],
    },
    {
      model: 'BMW X5',
      color: ['Salmon', 'Pink', 'Light Coral'],
    },
    {
      model: 'Audi A8',
      color: ['Hot Pink', 'Black', 'Crimson'],
    },
    {
      model: 'Mercedes-Benz SLS',
      color: ['Papaya Whip', 'Orchid', 'Olive'],
    },
  ];

  const [selectedCar, setSelectedCar] = useState(carList[0]);

  const handleModelChange = function (event) {
    const selectedModel = carList.find(
      (car) => car.model === event.target.value
    );
    setSelectedCar(selectedModel);
  };

  return (
    <div className='App'>
      <h1>Car List</h1>
      <div className='select-group'>
        <label for='cars'>Choose a car:</label>

        <select name='cars' id='cars' onChange={handleModelChange}>
          {carList.map((car) => {
            return <option value={car.model}>{car.model}</option>;
          })}
        </select>
      </div>

      <div className='select-group'>
        <label for='colors'>Choose a color:</label>
        <select name='colors' id='colors'>
          {selectedCar.color.map((color) => {
            return <option value={color}>{color}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default App;
